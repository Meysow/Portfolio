import {
  Dispatch,
  SetStateAction,
  TouchEventHandler,
  WheelEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface UseSectionSwitcherProps {
  numberOfSections: number;
  delayBetweenSectionChange: number;
}

interface UseSectionSwitcherReturn {
  selectedSection: number;
  setSelectedSection: Dispatch<SetStateAction<number>>;
  handleOnScroll: WheelEventHandler<HTMLDivElement>;
  handleTouchStart: TouchEventHandler<HTMLDivElement>;
  handleTouchMove: TouchEventHandler<HTMLDivElement>;
  handleTouchEnd: TouchEventHandler<HTMLDivElement>;
}

const useSectionSwitcher = ({
  numberOfSections,
  delayBetweenSectionChange,
}: UseSectionSwitcherProps): UseSectionSwitcherReturn => {
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const lastChangeTimestampRef = useRef<number>(0);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  // Using useRef to ensure Lethargy is only initialized once and compatible with SSR.
  const lethargyRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic import of Lethargy inside useEffect to ensure it's done on the client-side.
    import('lethargy').then((LethargyModule) => {
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

  const handleOnScroll: WheelEventHandler<HTMLDivElement> = useCallback(
    (e) => {
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

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = useCallback((e): void => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = useCallback((e): void => {
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

  return {
    selectedSection,
    setSelectedSection,
    handleOnScroll,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useSectionSwitcher;
