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
  const lastChangeTimestampRef = useRef<number>(0);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  // Using useRef to ensure Lethargy is only initialized once and compatible with SSR.
  const lethargyRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic import of Lethargy inside useEffect to ensure it's done on the client-side.
    import("lethargy").then((LethargyModule) => {
      lethargyRef.current = new LethargyModule.Lethargy();
    });
  }, []);

  const changeSection = useCallback(
    (increment: boolean) => {
      const now = Date.now();
      if (now - lastChangeTimestampRef.current < delayBetweenSectionChange) {
        // It's too soon to change sections again.
        return;
      }

      lastChangeTimestampRef.current = now;

      setSelectedSection((prev) => {
        let next = increment ? prev + 1 : prev - 1;
        return Math.max(1, Math.min(next, numberOfSections));
      });
    },
    [numberOfSections, delayBetweenSectionChange]
  );

  const handleOnScroll = useCallback(
    (e: WheelEvent) => {
      if (!lethargyRef.current) return; // Ensure Lethargy is initialized
      const check = lethargyRef.current.check(e);
      if (check === false) {
        // It's likely inertia, so do nothing
        return;
      }
      const scrollDown = check < 0;
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
    if (Math.abs(swipeDistance) < 50) return;

    changeSection(swipeDistance > 0);
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [changeSection]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    sectionElement.addEventListener("wheel", handleOnScroll, {
      passive: false,
    });
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
