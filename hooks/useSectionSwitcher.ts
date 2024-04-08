import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "./debounce";

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
  const allowSectionChangeRef = useRef<boolean>(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedAllowSectionChange = useCallback(
    debounce(() => {
      allowSectionChangeRef.current = true;
    }, delayBetweenSectionChange),
    []
  );

  const changeSection = useCallback(
    (increment: boolean) => {
      if (!allowSectionChangeRef.current) return;
      allowSectionChangeRef.current = false;
      debouncedAllowSectionChange();

      setSelectedSection((prevSection) => {
        let newSection = increment ? prevSection + 1 : prevSection - 1;
        newSection = Math.max(1, Math.min(newSection, numberOfSections));
        return newSection;
      });
    },
    [numberOfSections, debouncedAllowSectionChange]
  );

  const handleOnScroll = useCallback(
    (e: WheelEvent) => {
      const scrollDown = e.deltaY > 0;
      changeSection(scrollDown);
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

  //Setting all events as passive
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
