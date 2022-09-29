/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useEffect } from 'react';

export interface ScrollSnapProps {
  children: JSX.Element;
  sectionsId: string[];
};

interface ScrollSnapContextState {
  stopLockScroll: boolean;
  setStopLockScroll: React.Dispatch<React.SetStateAction<boolean>>;
  sectionIndexActive: number;
  setSectionIndexActive: React.Dispatch<React.SetStateAction<number>>;
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
  scrollDirection: 'down' | 'up' | null;
  setScrollDirection: React.Dispatch<React.SetStateAction<'down' | 'up' | null>>;
  startScrollAnimation: boolean;
  setStartScrollAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScrollSnapContext = createContext<ScrollSnapContextState>({
  stopLockScroll: false,
  setStopLockScroll: () => {},
  sectionIndexActive: -1,
  setSectionIndexActive: () => {},
  scrollPosition: -1,
  setScrollPosition: () => {},
  scrollDirection: null,
  setScrollDirection: () => {},
  startScrollAnimation: false,
  setStartScrollAnimation: () => {}
});

interface ScrollSnapProviderProps {
  children: JSX.Element;
  value: ScrollSnapContextState;
};

export const ScrollSnapProvider = ({ value, children }: ScrollSnapProviderProps): JSX.Element => (
  <ScrollSnapContext.Provider value={value}>
    {children}
  </ScrollSnapContext.Provider>
);

const scrollToSmoothly = (pos:number, time:number, callback?: () => void):void => {
  let start:DOMHighResTimeStamp;
  pos = +pos, time = +time;

  const step = (currentTime:DOMHighResTimeStamp):void => {
    start = !start ? currentTime : start;
    const progress = currentTime - start;
    const currentPos = window.scrollY;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
      if(callback){
        callback();
      }
    }
  };
  window.requestAnimationFrame(step);
};

interface ScrollToPositionParams {
  position: number;
  duration: number;
  indexActive: number;
  setStopLockScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setSectionIndexActive: React.Dispatch<React.SetStateAction<number>>;
};

export const scrollToPosition = ({
  position,
  duration,
  indexActive,
  setStopLockScroll,
  setSectionIndexActive
}: ScrollToPositionParams):void => {
  if(typeof window !== 'undefined'){
    setStopLockScroll(true);
    setTimeout(() => {
      scrollToSmoothly(position, duration);
      const waitTheScrollToPosition = setInterval(()=>{
        if(window.scrollY === position){
          clearInterval(waitTheScrollToPosition);
          setSectionIndexActive(indexActive);
          setStopLockScroll(false);
        }
      }, 100);
    }, 500);
  }
};

const ScrollSnap = ({
  children,
  sectionsId
}: ScrollSnapProps): JSX.Element => {
  const {
    stopLockScroll,
    sectionIndexActive,
    setSectionIndexActive,
    scrollPosition,
    setScrollPosition,
    scrollDirection,
    setScrollDirection,
    startScrollAnimation,
    setStartScrollAnimation
  } = useScrollSnap();

  const onScroll = ():void => {
    window.removeEventListener('scroll', onScroll);
    if(!stopLockScroll){
      setScrollPosition(window.scrollY);
    }
  };

  const lockScrollToElement = (element:HTMLElement, newSectionIndexActive:number, callback?: () => void):void => {
    scrollToSmoothly( newSectionIndexActive === 0 ? 0 : element.offsetTop, 800, callback);
  };

  const canStartScroll = ():boolean => {
    const collapsibleElement = document.querySelector('.collapsible') as HTMLElement;
    return window.scrollY <= (collapsibleElement.offsetTop + 200);
  };

  const scrollLockToSection = ():void => {
    let incrementSection = scrollDirection === 'down' ? 1 : -1;
    if(scrollDirection === 'down' && sectionIndexActive === -1){
      incrementSection = 2;
    }
    const newSectionIndexActive = sectionIndexActive + incrementSection;
    if(newSectionIndexActive >= 0 && newSectionIndexActive < sectionsId.length && canStartScroll()){
      const sectionId = sectionsId[newSectionIndexActive];
      const sectionElement = document.getElementById(sectionId) as HTMLElement;
      lockScrollToElement(sectionElement, newSectionIndexActive, ():void => {
        setSectionIndexActive(newSectionIndexActive);
        setStartScrollAnimation(false);
      });
    } else {
      if(scrollDirection === 'up' && sectionIndexActive === 0){
        setSectionIndexActive(-1);
      } else if(scrollDirection === 'down' && sectionIndexActive === sectionsId.length - 1 ){
        setSectionIndexActive(sectionsId.length);
      }
      setStartScrollAnimation(false);
    }
  };

  useEffect(() => {
    if(scrollDirection !== null){
      setStartScrollAnimation(true);
    }
    setScrollDirection(scrollPosition <= window.scrollY ? 'down' : 'up');
  }, [scrollPosition]);

  useEffect(() => {
    if(startScrollAnimation === false){
      window.addEventListener('scroll', onScroll);
    }

    if(startScrollAnimation && !stopLockScroll) {
      window.removeEventListener('scroll', onScroll);
      scrollLockToSection();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [startScrollAnimation, stopLockScroll]);

  return (
    <>
      { children }
    </>
  );
};

export default ScrollSnap;

export const useScrollSnap = ():ScrollSnapContextState => useContext(ScrollSnapContext);
 