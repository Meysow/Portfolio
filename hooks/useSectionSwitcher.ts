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
  const sectionRef = useRef<HTMLDivElement>(null);
  const allowScrollRef = useRef<boolean>(true);

  const handleSectionChange = useCallback(
    (increment: boolean) => {
      if (!allowScrollRef.current) return;
      allowScrollRef.current = false;
      setTimeout(() => {
        allowScrollRef.current = true;
      }, delayBetweenSectionChange);

      setSelectedSection((currentSection) => {
        const nextSection = increment
          ? Math.min(currentSection + 1, numberOfSections)
          : Math.max(currentSection - 1, 1);
        return nextSection;
      });
    },
    [numberOfSections, delayBetweenSectionChange]
  );

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (!allowScrollRef.current) return;
      const scrollDown = e.deltaY > 0;
      handleSectionChange(scrollDown);
    },
    [handleSectionChange]
  );

  const handleTouchEnd = useCallback(() => {
    if (touchStartRef.current === null || touchEndRef.current === null) return;

    const swipeDistance = touchStartRef.current - touchEndRef.current;
    if (Math.abs(swipeDistance) < 50) return; // Ensure significant swipe distance

    if (!allowScrollRef.current) return; // Check if allowed to change section

    allowScrollRef.current = false;
    setTimeout(() => {
      allowScrollRef.current = true; // Re-enable after cool-down
    }, delayBetweenSectionChange);

    // Directly change section based on swipe direction
    const increment = swipeDistance < 0;
    handleSectionChange(increment);

    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [delayBetweenSectionChange, handleSectionChange]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    sectionElement.addEventListener("wheel", handleScroll, { passive: true });
    sectionElement.addEventListener("touchend", handleTouchEnd, {
      passive: false,
    });

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener("wheel", handleScroll);
        sectionElement.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [handleScroll, handleTouchEnd]);

  return { selectedSection, sectionRef, setSelectedSection };
};

export default useSectionSwitcher;
