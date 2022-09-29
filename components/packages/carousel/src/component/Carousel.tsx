/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { PillButton } from '@components/buttons';
import { CarouselContext, SlideProps } from '@components/carousel';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Splide as SplideType } from '@splidejs/splide';

export interface CarouselProps {
  slides: SlideProps[];
  isMain?: boolean;
  direction?: 'rtl' | 'ltr';
};

/**
 * Carousel component
 * @param {number} slides - REQUIRED: This is the array of slides in the Carousel.
 * @param {boolean} isMain - OPTIONAL: This is a boolean used to determine if the Carousel is the main one. The default value is false.
 * @param {boolean} direction - OPTIONAL: This is the direction of the Carousel. The default value is 'ltr'.
*/

const Carousel = ({
  slides,
  isMain = false,
  direction = 'ltr'
}: CarouselProps): JSX.Element => {
  const splideRef = useRef<Splide>(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const { setShowRightSliderRightButton, setShowRightSliderLeftButton, setShowLeftSliderRightButton, setShowLeftSliderLeftButton, setRightSliderRightSplide, setLeftSliderLeftSplide } = useContext(CarouselContext);
  const arrowClass: string =  isFirstSlide || isLastSlide ? 'splide__arrow--end' : '';
  const colorClass: string = direction === 'ltr' ? 'pink' : 'purple';
  let ltrButtons: JSX.Element;
  let rtlButtons: JSX.Element;

  /**
   * Function to run when navigating in the carousel.
   */
  const onMove = (splide: SplideType, index: number) : void => {
    // Update the value of isFirstSlide to true if slide index is equal to 0.
    setIsFirstSlide(index === 0);
    // Update the value of isLastSlide to true if slide index is equal to 0.
    setIsLastSlide(index === splide.length - 1);

    // If the carousel direction is LTR (right carousel).
    if (direction === 'ltr') {
      if (index === 0) {
        // If we are on the first slide of the right carousel, show the left button (back) of the MainCarousel.
        setShowRightSliderRightButton(false);
        setShowRightSliderLeftButton(true);
      } else if (index === splide.length - 1) {
        // If we are on the last slide of the right carousel, show the right button (back to middle carousel) of the MainCarousel.
        setShowRightSliderRightButton(true);
        setShowRightSliderLeftButton(false);
      } else {
        // If we are on any slide besides the first and last one of the right carousel, hide the left button (back) and right button (back to middle carousel) of the MainCarousel.
        setShowRightSliderLeftButton(false);
        setShowRightSliderRightButton(false);
      }
    }

    // If the carousel direction is RTL (left carousel).
    if (direction === 'rtl') {
      if (index === 0) {
        // If we are on the first slide of the left carousel, show the right button (back) of the MainCarousel.
        setShowLeftSliderRightButton(true);
        setShowLeftSliderLeftButton(false);
      } else if (index === splide.length - 1) {
        // If we are on the last slide of the left carousel, show the left button (back to middle carousel) of the MainCarousel.
        setShowLeftSliderLeftButton(true);
        setShowLeftSliderRightButton(false);
      } else {
        // If we are on any slide besides the first and last one of the left carousel, hide the left button (back) and right button (back to middle carousel) of the MainCarousel.
        setShowLeftSliderLeftButton(false);
        setShowLeftSliderRightButton(false);
      }
    }
  };

  /**
   * Function to run on first render of the component to control the button state of the MainCarousel component.
   */
  useEffect(() => {
    // If the carousel is not the main one (middle carousel).
    if (!isMain) {
      // If the child carousel direction is LTR (right carousel).
      if (direction === 'ltr') {
        // Initially show only the left button of the MainCarousel in the right child carousel.
        setShowRightSliderLeftButton(true);
        // Initially hide the right button of the MainCarousel in the right child carousel.
        setShowRightSliderRightButton(false);
        setRightSliderRightSplide(splideRef);
      } else {
        // If the child carousel direction is RTL (left carousel), initially show the right button of the MainCarousel in the left child carousel.
        setShowLeftSliderRightButton(true);
        // If the child carousel direction is RTL (left carousel), initially hide the left button of the MainCarousel in the left child carousel.
        setShowLeftSliderLeftButton(false);
        setLeftSliderLeftSplide(splideRef);
      }
    }
  }, []);

  /**
   * Function for next button.
   */
  const goToNextSlide : React.MouseEventHandler<HTMLButtonElement> = () => {
    if(isLastSlide){
      // If current slide index === length - 1, go back to first slide.
      splideRef.current?.go(0);
    } else {
      // Else go to next slide index.
      splideRef.current?.go('>');
    }
  };

  /**
   * Function for back button.
   */
  const goToPreviousSlide : React.MouseEventHandler<HTMLButtonElement> = () => {
    if(!isFirstSlide){
      // If current slide index !== 0, go back by one index.
      splideRef.current?.go('<');
    }
  };

  if (isFirstSlide) {
    // When slide index === 0, show only the right button in LTR carousel and hide the left button.
    ltrButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--next', isLastSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isLastSlide}
            direction='right'
            label='Return to start'
            color='pink'
            onClick={goToNextSlide}
          />
        </div>
      </div>
    );

    // When slide index === 0, show only the left button in RTL carousel and hide the right button.
    rtlButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--prev', isLastSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isLastSlide}
            direction='left'
            label='Return to start'
            color='purple'
            onClick={goToNextSlide}
          />
        </div>
      </div>
    );
  } else if (isLastSlide) {
    // When slide index === length - 1, show only the left button in LTR carousel and hide the right button.
    ltrButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--prev', isFirstSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isFirstSlide}
            direction='left'
            label='Return to start'
            color='pink'
            onClick={goToPreviousSlide}
          />
        </div>
      </div>
    );

    // When slide index === length - 1, show only the right button in RTL carousel and hide the left button.
    rtlButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--next', isFirstSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isFirstSlide}
            direction='right'
            label='Return to start'
            color='purple'
            onClick={goToPreviousSlide}
          />
        </div>
      </div>
    );
  } else {

    // When slide index !== 0 | length - 1, show both the right and left buttons in LTR carousel in pink color.
    ltrButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--prev', isFirstSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isFirstSlide}
            direction='left'
            label='Return to start'
            color='pink'
            onClick={goToPreviousSlide}
          />
        </div>
        <div className={['splide__arrow splide__arrow--next', isLastSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isLastSlide}
            direction='right'
            label='Return to start'
            color='pink'
            onClick={goToNextSlide}
          />
        </div>
      </div>
    );

    // When slide index !== 0 | length - 1, show both the right and left buttons in RTL carousel in purple color.
    rtlButtons = (
      <div className="splide__arrows">
        <div className={['splide__arrow splide__arrow--next', isFirstSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isFirstSlide}
            direction='right'
            label='Return to start'
            color='purple'
            onClick={goToPreviousSlide}
          />
        </div>
        <div className={['splide__arrow splide__arrow--prev', isLastSlide ? arrowClass : ''].join(' ')}>
          <PillButton
            fullSize={isLastSlide}
            direction='left'
            label='Return to start'
            color='purple'
            onClick={goToNextSlide}
          />
        </div>
      </div>
    );
  };

  return (
    <StyleWrapper
      data-testid="carousel"
      className={['carousel', `carousel--${colorClass}`, `carousel--${direction === 'ltr' ? 'ltr' : 'rtl'}`].join(' ')}
    >
      <Splide
        ref={splideRef}
        hasTrack={false}
        aria-label="..."
        tag="section"
        options = {{
          width: '100vw',
          padding: {
            left: '115px', 
            right: '115px'
          },
          classes: {
            pagination: 'splide__pagination carousel--pagination',
          },
          pagination: slides.length > 1 ? true : false,
          arrows: false,
          direction: direction,
          drag: isMain ? false : true
        }}
        onMove={onMove}
      >
        <SplideTrack className='splide__track'>
          {
            Array.from(slides).map((item: any, index: number) => (
              <SplideSlide key={`carousel-item-${index}`}>
                <div className='carousel--slide'>
                  {React.cloneElement(item, { splideElement: splideRef })}
                </div>
              </SplideSlide>
            ))
          }
        </SplideTrack>
        {
          !isMain && (direction === 'ltr' ? ltrButtons : rtlButtons)
        }
      </Splide>
    </StyleWrapper>
  );
};

/**
 * Styledwrapper styles
 */
const DefaultStyles = css`
  &.carousel {
    background-color: var(--grey-100);

    li::before {
      display: none;
    }

    &&--pink {
      .splide__pagination__page.is-active {
        background-color: var(--dark-pink);
      }

      .slide {
        h2 {
          color: var(--dark-pink);
        }
      }
    }

    &&--purple {
      .splide__pagination__page.is-active {
        background-color: var(--dark-purple);
      }

      .slide {
        h2 {
          color: var(--dark-purple);
        }
      }
    }

    &&--rtl {
      .slide {
        direction: ltr;

        .slide-content {
          direction: ltr;
        }
      }
    }
  }
`;

/**
 * SplideJS carousel styles - All to be removed if changing carousel library
 */
const SplideStyles = css`
  .splide__track {
    padding-left: 0;
    padding-right: 0;

    @media (min-width: 992px) {
      padding-right: 115px;
      padding-left: 115px;
    }
  }

  .carousel--slide {
    background-color: var(--white);
    margin: 10px 25px 15px;
    padding: 15px;
    border-radius: 8px;
    height: 485px;

    @media (min-width: 992px) {
      margin: 20px 67px 50px;
      padding: 60px 100px;
      height: 600px;
      overflow: hidden;
    }
  }

  .carousel--pagination {
    bottom: 1em;

    li {
      margin-left: 5px;
      margin-right: 5px;
    }

    .splide__pagination__page {
      opacity: 1;
      height: 15px;
      width: 15px;
      background-color: #c6c7c9;
      border-radius: 100%;
      outline: none;

      &.is-active {
        transform: unset;
      }
    }
  }

  .splide {
    padding: 0 0 28px;

    @media (min-width: 992px) {
      padding: 0 0 40px;
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
    bottom: -56px;
    transform: unset;
    top: unset;

    &--prev {
      left: 0;
      &.splide__arrow--end {
        left: 1.5%;
      }

      @media (min-width: 992px) {
        left: 90px;
      }
    }
    
    &--next {
      right: 0;
      &.splide__arrow--end {
        right: 1.5%;
      }

      @media (min-width: 992px) {
        right: 90px;
      }
    }

    @media (min-width: 992px) {
      top: 45%;
      bottom: unset;
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

const StyleWrapper = styled.div<{className?: string}>`
  ${DefaultStyles}
  ${SplideStyles}
`;

export default Carousel;
