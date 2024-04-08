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
  const allowScrollRef = useRef<boolean>(true);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  const minScrollWheelInterval = 600; // Minimum milliseconds between scrolls to consider as human scroll
  const animSpeed = delayBetweenSectionChange; // Use the provided delay for animation speed as well

  const handleSectionChange = useCallback(
    (increment: boolean) => {
      if (!allowScrollRef.current) return;

      allowScrollRef.current = false;
      setTimeout(() => {
        allowScrollRef.current = true;
      }, animSpeed);

      setSelectedSection((currentSection) => {
        const nextSection = increment
          ? Math.min(currentSection + 1, numberOfSections)
          : Math.max(currentSection - 1, 1);
        return nextSection;
      });
    },
    [numberOfSections, animSpeed]
  );

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      const now = Date.now();
      const rapidSuccession =
        now - lastScrollWheelTimestamp.current < minScrollWheelInterval;
      const otherDirection = lastScrollWheelDelta.current > 0 !== e.deltaY > 0;
      const speedDecrease =
        Math.abs(e.deltaY) < Math.abs(lastScrollWheelDelta.current);
      const isHuman = otherDirection || !rapidSuccession || speedDecrease;

      if (isHuman && !allowScrollRef.current) return;

      const scrollDown = e.deltaY > 0;
      if (isHuman) handleSectionChange(scrollDown);

      lastScrollWheelTimestamp.current = now;
      lastScrollWheelDelta.current = e.deltaY;
    },
    [handleSectionChange, minScrollWheelInterval]
  );

  const handleTouchStart = useCallback((e: TouchEvent): void => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent): void => {
    touchEndRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStartRef.current === null || touchEndRef.current === null) return;

    const swipeDistance = touchStartRef.current - touchEndRef.current;
    if (Math.abs(swipeDistance) < 50) return; // Ensure significant swipe distance

    if (!allowScrollRef.current) return; // Check if allowed to change section

    allowScrollRef.current = false;
    setTimeout(() => {
      allowScrollRef.current = true; // Re-enable after cool-down
    }, delayBetweenSectionChange);

    const increment = swipeDistance < 0;
    handleSectionChange(increment);

    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [delayBetweenSectionChange, handleSectionChange]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener("wheel", handleScroll, { passive: true });
      sectionElement.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      sectionElement.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      sectionElement.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });

      return () => {
        sectionElement.removeEventListener("wheel", handleScroll);
        sectionElement.removeEventListener("touchstart", handleTouchStart);
        sectionElement.removeEventListener("touchmove", handleTouchMove);
        sectionElement.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [handleScroll, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return { selectedSection, sectionRef, setSelectedSection };
};

export default useSectionSwitcher;
