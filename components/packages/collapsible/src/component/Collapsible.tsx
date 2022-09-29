import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { RichText, RichTextProps } from '@components/rich-text';

export interface CollapsibleProps {
  isiTitle: string;
  isiTopText: RichTextProps;
  isiBottomText: RichTextProps;
  indicationTitle?: string;
  indicationText: RichTextProps;
  openCollapsibleCustom?: () => void;
  closeCollapsibleCustom?: () => void;
}

/**
 * Collapsible component
 * @param {string} isiTitle - This is the title of the part one section.
 * @param {RichTextProps} isiTopText - This is the content of the part one section.
 * @param {RichTextProps} isiBottomText - This is the content of the part two section.
 * @param {string} indicationTitle - This is the title of the indication section.
 * @param {RichTextProps} indicationText - This is the content of the indication section.
*/

const Collapsible = ({
  isiTitle,
  isiTopText,
  isiBottomText,
  indicationTitle,
  indicationText,
  openCollapsibleCustom,
  closeCollapsibleCustom
}: CollapsibleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const collapsibleRef = useRef<HTMLDivElement>(null);
  const buttonLabel = isOpen ? 'View less' : 'View more';
  const sectionClass = isOpen ? 'open' : 'closed';
  const animationDuration = 0;
  const [scrollPosition, setScrollPosition] = useState(0);
  let bottom: number;

  /**
   * Handle collapse
   * Check the previous state of the collapsible
   * On click, it will open or close the collapsible depending on the prev state
  */  
  const handleCollapse = () :void => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      if(openCollapsibleCustom){
        collapsibleRef.current?.classList.add('position-relative');
        openCollapsibleCustom();
      } else {
        openCollapsible();
      }
    } else {
      if(closeCollapsibleCustom){
        collapsibleRef.current?.classList.remove('position-relative');
        closeCollapsibleCustom();
      } else {
        closeCollapsible();
      }
    }
  };

  /**
   * Function to open Collapsible
   * Add class relative to the collpasible when view more is clicked
   * Make the element visible to the user using scrollIntoView method
  */  
  const openCollapsible = () :void => {
    setTimeout(() => {
      collapsibleRef.current?.classList.add('position-relative');
      collapsibleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, animationDuration);
  };

  /**
   * Function to close Collapsible
   * Remove class relative to the collpasible when view less is clicked
   * and scroll to the top of the page using window.scroll method
  */ 
  const closeCollapsible = () :void => {
    collapsibleRef.current?.classList.remove('position-relative');
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  /**
   * Function to open or close the collapsible when pressing enter
  */ 
  const handleKeyDown = (e: React.KeyboardEvent) :void => {
    if (e.currentTarget && e.key === 'Enter') {
      handleCollapse();
    }
  };

  /**
   * Get the current vertical scroll position of the page
  */ 
  useEffect(() => {
    const handleScroll = (): void => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    /**
   * Get the bottom position of the collapsible
   * Take the negative value of scroll height and add a value of the height of the collapsible to be shown on the screen
  */
    const handleResize = (): void => {

      const mobileCollapsibleHeight = (): void => {
        if(collapsibleRef.current) {
          bottom = -collapsibleRef.current.scrollHeight + 100;
          collapsibleRef.current.style.bottom =  `${bottom}px`;
        }
      };

      const desktopCollapsibleHeight = (): void => {
        if(collapsibleRef.current) {
          bottom = -collapsibleRef.current.scrollHeight + 125;
          collapsibleRef.current.style.bottom =  `${bottom}px`;
        }
      };

      if(collapsibleRef.current && window.innerWidth < 992) {
        mobileCollapsibleHeight();
      } else {
        desktopCollapsibleHeight();
      };
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () :void => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /**
   * Check if window exist in current context and if it should be on the client side only
   * 
  */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(collapsibleRef && collapsibleRef.current){
        if(window.scrollY >= collapsibleRef.current.offsetTop - 300){
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    }
  }, [scrollPosition]);
 
  return (
    <StyleWrapper
      data-testid="collapsible"
      ref={collapsibleRef}
      className={['collapsible', sectionClass].join(' ')}
    >
      <div className='collapsible__body' id="collapsible">
        <div className="collapsible__body__content">
          <div className='isipart'>
            <div className='isipart__row'>
              <div className='isipart__one'>
                <span className='isipart__one__title'>{isiTitle}</span>
                <RichText json={isiTopText.json} links={isiTopText.links} />
              </div>
              <div className='indication'>
                <span className='indication__title'>{indicationTitle}</span>
                <RichText json={indicationText.json} links={indicationText.links} />
              </div>
              <div className='isipart__two'>
                <RichText json={isiBottomText.json} links={isiBottomText.links} />
              </div>
            </div>
          </div>
        </div>
        <div className="collapsible__body__action">
          <button type="button" onClick={handleCollapse} onKeyDown={handleKeyDown}>
            {buttonLabel}
            <span className={isOpen ? 'arrow--up' : 'arrow--down'}></span>
          </button>
        </div>
      </div>
    </StyleWrapper>
  );
};

const CollapsibleStyles = css`
  &.collapsible {
    position: sticky;
    background-color: var(--white);
    width: 100%;
    border: 1px solid var(--grey-100);
    z-index: 3;
    scroll-behavior: smooth;
    transition-duration: 0.5s;
    transition-property: top;
    min-height: 140px;

    &.position-relative {
     position: relative;
     top: -40px;

     @media (min-width: 992px){
      top: 0;
     }

    }
  }

  .collapsible__body {
    padding: 20px 0;

    &__content {
      max-width: 80%;
      margin: 0 26.5px;
      min-height: 700px;

      @media (min-width: 992px) {
        margin: 0 auto;
      }
    }

    &__action {
      position: absolute;
      top: 12px;
      right: 0;

      @media (min-width: 992px) {
        top: 13px;
        right: 50px;
      }

      button {
        width: 133px;
        height: 36px;
        background-color: transparent;
        outline: none;
        color: var(--dark-pink);
        border: none;
        font-family: var(--font-primary-semibold);
        font-size: 14px;
        text-transform: capitalize;

        span {
          display: inline-block;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          margin-left: 4px;

          &.arrow--up {
            border-bottom: 13px solid var(--dark-pink);
          }

          &.arrow--down {
            border-top: 13px solid var(--dark-pink);
          }
        }

        @media (min-width: 992px) {
          font-size: 18px;

          span{
            margin-left: 12px;
          }

        }

      }
    }
  }

  .indication__title, 
  .isipart__one__title, 
  .isipart__two__title {
    display: block;
    text-align: left;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: bold;
    color: var(--dark-pink);
    text-transform: uppercase;
    font-family: var(--font-primary-semibold);
    margin-bottom: 10px;

    @media (min-width: 992px) {
      font-size: 18px;
    }
  }

  .isipart {
    &__row {
      display: flex;
      flex-flow: wrap row;
      margin-bottom: 25px;
    }

    &__one {
      width: 100%;

      @media (min-width: 992px) {
        width: 50%;
      }
    }

    &__two {
      width: 100%;
      margin-bottom: 20px;

      @media (min-width: 992px) {
        margin-bottom: 0;
      }

    }
  }

  .indication {
    width: 100%;
    padding-left: 0;
    margin-left: 0;
    border-left: none;
    order: 3;

    @media (min-width: 992px) {
      width: calc(40% - 40px);
      border-left: 1px solid #dbdbdb;
      padding-left: 20px;
      margin-left: 20px;
      order: unset;
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
  ${CollapsibleStyles}
`;

export default Collapsible;
