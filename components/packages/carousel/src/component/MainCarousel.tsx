/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useRef, createContext } from 'react';
import styled, { css } from 'styled-components';
import { MiscButton, PillButton } from '@components/buttons';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Splide as SplideType } from '@splidejs/splide';

export interface MainCarouselProps {
  carousels: JSX.Element[];
  leftButtonLabel?: string;
  rightButtonLabel?: string;
};

interface ContextState {
  setShowRightSliderRightButton: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRightSliderLeftButton: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLeftSliderRightButton: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLeftSliderLeftButton: React.Dispatch<React.SetStateAction<boolean>>;
  setRightSliderRightSplide: React.Dispatch<React.RefObject<Splide> | null>;
  setLeftSliderLeftSplide: React.Dispatch<React.RefObject<Splide> | null >;
}

export const CarouselContext = createContext<ContextState>({
  setShowRightSliderRightButton: () => {},
  setShowRightSliderLeftButton: () => {},
  setShowLeftSliderRightButton: () => {},
  setShowLeftSliderLeftButton: () => {},
  setRightSliderRightSplide: () => {},
  setLeftSliderLeftSplide: () => {}
});

/**
 * Main Carousel (Documentation of the functions can be found in the Carousel component)
 * @param {JSX.Element[]} carousels - This is a list of Carousel components which will be displayed.
 * @param {string} leftButtonLabel - Optional: This is the label of the left button if the carousel is main.
 * @param {string} rightButtonLabel - Optional: This is the label of the right button if the carousel is main.
*/

const MainCarousel = ({
  carousels,
  leftButtonLabel,
  rightButtonLabel,
}: MainCarouselProps): JSX.Element => {
  const splideRef = useRef<Splide>(null);
  const [isFirstSlide, setIsFirstSlide] = useState(carousels.length === 2 ? true : false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [showRightSliderRightButton, setShowRightSliderRightButton] = useState(true);
  const [showRightSliderLeftButton, setShowRightSliderLeftButton] = useState(true);
  const [showLeftSliderRightButton, setShowLeftSliderRightButton] = useState(true);
  const [showLeftSliderLeftButton, setShowLeftSliderLeftButton] = useState(true);

  const [rightSliderRightSplide, setRightSliderRightSplide] = useState<React.RefObject<Splide> | null >(null);
  const [leftSliderLeftSplide, setLeftSliderLeftSplide] = useState<React.RefObject<Splide> |null >(null);

  const arrowClass: string =  isFirstSlide || isLastSlide ? 'splide__arrow--end' : '';

  const onMove = (splide: SplideType, index: number) : void => {
    setIsFirstSlide(index === 0);
    setIsLastSlide(index === splide.length - 1);
  };

  const goToNextSlide : React.MouseEventHandler<HTMLButtonElement> = () => {
    if(isLastSlide){
      if(rightSliderRightSplide && rightSliderRightSplide.current){
        rightSliderRightSplide.current.go(0);
      }
      splideRef.current?.go(carousels.length === 3 ? 1 : 0);
    } else {
      splideRef.current?.go('>');
    }
  };

  const goToPreviousSlide : React.MouseEventHandler<HTMLButtonElement> = () => {
    if(isFirstSlide){
      if(leftSliderLeftSplide && leftSliderLeftSplide.current){
        leftSliderLeftSplide.current.go(0);
      }
      splideRef.current?.go(carousels.length === 3 ? 1 : 0);
    } else {
      splideRef.current?.go('<');
    }
  };

  return (
    <CarouselContext.Provider value={{ setShowRightSliderRightButton, setShowRightSliderLeftButton, setShowLeftSliderRightButton, setShowLeftSliderLeftButton, setRightSliderRightSplide, setLeftSliderLeftSplide }}>
      <StyleWrapper
        data-testid='main-carousel'
        className='main-carousel'
      >
        <Splide
          ref={splideRef}
          hasTrack={false}
          aria-label="..."
          tag="section"
          options = {{
            width: '100vw',
            padding: {
              left: '0',
              right: '0'
            },
            classes: {
              pagination: 'splide__pagination carousel--pagination',
            },
            pagination: false,
            arrows: false,
            start: carousels.length === 2 ? 0 : 1,
            drag: carousels.length === 2 && isFirstSlide || carousels.length === 3 && !isFirstSlide && !isLastSlide ? true : false
          }}
          onMove={onMove}
        >
          <SplideTrack className='splide__track--main'>
            {carousels.map((carousel, index) => (
              <SplideSlide key={`main-carousel-item-${index}`}>
                <div className='main-carousel__slide'>
                  {carousel}
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          {
            !isFirstSlide && !isLastSlide && carousels.length === 3 && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--prev-main splide__arrow--main', isFirstSlide ? arrowClass : ''].join(' ')}>
                  <MiscButton
                    color='purple'
                    direction='left'
                    label={leftButtonLabel || 'Swipe To Start'}
                    onClick={goToPreviousSlide}
                  />
                </div>
                <div className={['splide__arrow splide__arrow--next-main splide__arrow--main', isLastSlide ? arrowClass : ''].join(' ')}>
                  <MiscButton
                    color='pink'
                    direction='right'
                    label={rightButtonLabel || 'Swipe To Start'}
                    onClick={goToNextSlide}
                  />
                </div>
              </div>
            )
          }
          {
            isFirstSlide && !isLastSlide && carousels.length === 2 && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--next-main splide__arrow--main', isLastSlide ? arrowClass : ''].join(' ')}>
                  <MiscButton
                    color='pink'
                    direction='right'
                    label={rightButtonLabel || 'Swipe To Start'}
                    onClick={goToNextSlide}
                  />
                </div>
              </div>
            )
          }
          {
            isFirstSlide && showLeftSliderLeftButton && carousels.length === 3 && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--prev-main splide__arrow--main', isLastSlide ? arrowClass : ''].join(' ')}>
                  <PillButton
                    fullSize={true}
                    direction='left'
                    label='Return to start'
                    color='purple'
                    onClick={goToPreviousSlide}
                  />
                </div>
              </div>
            )
          }
          {
            isFirstSlide && showLeftSliderRightButton && carousels.length === 3 && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--next-main splide__arrow--main splide__arrow--next-main--pill', isLastSlide ? arrowClass : ''].join(' ')}>
                  <PillButton
                    fullSize={false}
                    direction='right'
                    label='Return to start'
                    color='purple'
                    onClick={goToNextSlide}
                  />
                </div>
              </div>
            )
          }
          {
            isLastSlide && showRightSliderLeftButton && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--prev-main splide__arrow--main splide__arrow--prev-main--pill', isFirstSlide ? arrowClass : ''].join(' ')}>
                  <PillButton
                    fullSize={false}
                    direction='left'
                    label='Return to start'
                    color='pink'
                    onClick={goToPreviousSlide}
                  />
                </div>
              </div>
            )
          }
          {
            isLastSlide && showRightSliderRightButton && (
              <div className="splide__arrows">
                <div className={['splide__arrow splide__arrow--next-main splide__arrow--main', isFirstSlide ? arrowClass : ''].join(' ')}>
                  <PillButton
                    fullSize={true}
                    direction='right'
                    label='Return to start'
                    color='pink'
                    onClick={goToNextSlide}
                  />
                </div>
              </div>
            )
          }
        </Splide>
      </StyleWrapper>
    </CarouselContext.Provider>
  );
};

/**
 * Styledwrapper styles
 */
const DefaultStyles = css`
  &.main-carousel {
    background-color: var(--grey-100);

    li::before {
      display: none;
    }
  }

  .misc-button--right {
    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 485px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--white);
      position: absolute;
      top: -520px;
      right: 0;

      @media (min-width: 992px) {
        height: 600px;
        top: -646px;
      }
    }

    @media (min-width: 992px) {
      &:before{
        width: 47px;
        top: -266px;
        right: -38px;
      }
    }
  }

  .misc-button--left {
    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 485px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: var(--white);
      position: absolute;
      top: -520px;
      left: 0;

      @media (min-width: 992px) {
        height: 600px;
        top: -646px;
      }
    }

    @media (min-width: 992px) {
      &:before{
        width: 47px;
        top: -266px;
        left: -38px;
      }
    }
  }
`;

/**
 * SplideJS carousel styles - All to be removed if changing carousel library
 */
const SplideStyles = css`
  .main-carousel__slide {
    height: 100%;
    border-radius: 8px;

    @media (max-width: 991px) {
      margin-bottom: 63px;
    }
  }
  
  .splide__track {
    @media (max-width: 991px) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .splide__arrow {
    opacity: 1;
    width: auto;
    height: auto;
    background: unset;
    outline: none;

    &--main {
      top: 346px;
    }
    
    &--prev-main {
      left: 48px;

      @media (max-width: 991px) {
        left: 0 !important;
      }
    }

    &--prev-main--pill {
      left: 90px;

      &:before {
        content: '';
        width: 8px;
        height: 600px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: var(--white);
        position: absolute;
        top: -659px;
        left: 0;
      }

      @media (min-width: 992px) {
        top: 346px;
        left: 90px;

        &:before {
          width: 47px;
          top: -300px;
          left: -90px;
        }
      }
    }
    
    &--next-main {
      right: 48px;

      @media (max-width: 991px) {
        right: 0 !important;
      }
    }

    &--next-main--pill {
        right: 90px;

        &:before {
          content: '';
          width: 8px;
          height: 600px;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          background-color: var(--white);
          position: absolute;
          top: -660px;
          right: 0;
        }

      @media (min-width: 992px) {
        top: 346px;
        right: 90px;

        &:before {
          width: 47px;
          top: -300px;
          right: -90px;
        }
      }
    }

    @media (max-width: 991px) {
      transform: unset;
      top: unset;

      &--main {
        bottom: 7px;
      }
    }

    button {
      outline: none;
    }

    svg {
      width: 52px;
      height: 52px;
      transform: unset;
    }
  }
`;

const StyleWrapper = styled.div`
  ${DefaultStyles}
  ${SplideStyles}
`;

export default MainCarousel;
