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
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const lastInteractionRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canScrollRef = useRef<boolean>(true);

  const changeSection = useCallback(
    (increment: boolean): void => {
      if (!canScrollRef.current) return; // Check if a scroll action is allowed
      canScrollRef.current = false; // Prevent further scrolls

      // Change section logic
      setSelectedSection((prevSection) => {
        const nextSection = increment
          ? Math.min(prevSection + 1, numberOfSections)
          : Math.max(prevSection - 1, 1);
        return nextSection;
      });

      // Reset the scroll control after a delay
      setTimeout(() => {
        canScrollRef.current = true;
      }, delayBetweenSectionChange);
    },
    [numberOfSections, delayBetweenSectionChange]
  );

  const handleOnScroll = useCallback(
    (e: WheelEvent): void => {
      const now = new Date().getTime();
      if (now - lastInteractionRef.current < delayBetweenSectionChange) return;
      lastInteractionRef.current = now;

      const scrollDown = e.deltaY > 0;
      changeSection(scrollDown);
    },
    [changeSection, delayBetweenSectionChange]
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
