import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface UseSectionSwitcherProps {
  numberOfSections: number;
  delayBetweenSectionChange: number;
}

interface UseSectionSwitcherReturn {
  selectedSection: number;
  sectionRef: React.RefObject<HTMLDivElement>;
  setSelectedSection: Dispatch<SetStateAction<number>>;
}

const useSectionSwitcher = ({
  numberOfSections,
  delayBetweenSectionChange,
}: UseSectionSwitcherProps): UseSectionSwitcherReturn => {
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const lastScrollWheelTimestamp = useRef<number>(0);
  const lastScrollWheelDelta = useRef<number>(0);
  const animating = useRef<boolean>(false);

  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  const changeSection = useCallback(
    (increment: boolean): void => {
      if (animating.current) return;

      animating.current = true;
      setSelectedSection((prevSection) => {
        let newSection = increment ? prevSection + 1 : prevSection - 1;
        newSection = Math.max(1, Math.min(newSection, numberOfSections));

        setTimeout(() => {
          animating.current = false; // Reset animation lock after delay
        }, delayBetweenSectionChange);

        return newSection;
      });
    },
    [numberOfSections, delayBetweenSectionChange]
  );

  const handleOnScroll = useCallback(
    (e: WheelEvent): void => {
      const now = Date.now();
      const minScrollWheelInterval = 300; // Minimum milliseconds between scrolls
      const rapidSuccession =
        now - lastScrollWheelTimestamp.current < minScrollWheelInterval;
      const otherDirection = lastScrollWheelDelta.current > 0 !== e.deltaY > 0;
      const speedDecrease =
        Math.abs(e.deltaY) < Math.abs(lastScrollWheelDelta.current);

      const isHuman = otherDirection || !rapidSuccession || !speedDecrease;

      if (isHuman) {
        const scrollDown = e.deltaY > 0;
        changeSection(scrollDown);
      }

      lastScrollWheelTimestamp.current = now;
      lastScrollWheelDelta.current = e.deltaY;
    },
    [changeSection]
  );

  const handleTouchStart = useCallback((e: TouchEvent): void => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent): void => {
    touchEndRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((): void => {
    if (touchStartRef.current === null || touchEndRef.current === null) return;
    const swipeDistance = touchStartRef.current - touchEndRef.current;
    if (
      touchStartRef.current === null ||
      touchEndRef.current === null ||
      Math.abs(swipeDistance) < 50
    )
      return;

    changeSection(swipeDistance > 0);
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [changeSection]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    sectionElement.addEventListener("wheel", handleOnScroll, { passive: true });
    sectionElement.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    sectionElement.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });
    sectionElement.addEventListener("touchend", handleTouchEnd, {
      passive: false,
    });

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("wheel", handleOnScroll);
        sectionElement.removeEventListener("touchstart", handleTouchStart);
        sectionElement.removeEventListener("touchmove", handleTouchMove);
        sectionElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [handleOnScroll, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return { selectedSection, sectionRef, setSelectedSection };
};

export default useSectionSwitcher;
