import { BackToTopButton } from '@components/buttons';
import { Navigation, NavigationProps } from '@components/navigation';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export interface InlineMenuProps {
  navLinks: NavigationProps;
  enableTopButton?: boolean;
}

/**
 * Inline menu component
 * @param {NavigationProps} navLinks - This is the navigation links component.
 * @param {boolean} enableTopButton - Optional: This is a boolean which determines whether to display the back to previous section button.
 */

const InlineMenu = ({
  navLinks,
  enableTopButton = false
}: InlineMenuProps): JSX.Element => {
  const [scrollPosition, setScrollPosition] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollPosition(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyClass = scrollPosition ? 'position-sticky' : '';

  return (
    <StyleWrapper
      className={['inline-menu', stickyClass].join(' ')}
      data-testid='inline-menu'
    >
      {enableTopButton && (<BackToTopButton mobileVersion={true} />)}
      <Navigation links={navLinks.links} />
    </StyleWrapper>
  );
};

const InlineMenuStyles = css`
  &.inline-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 0 7px 7px;
    background-color: var(--grey-100);
    z-index: 9;
    
    @media (min-width: 992px) {
      display: none;
    }

    &.position-sticky {
     position: sticky;
     top: 0;
     background-color: var(--white);
     box-shadow: -1px 1px 1px 1px rgba(0,0,0,0.02);
    }

    .button-totop {
      align-self: center;
    }

    .navigation {
      position: relative;
      margin: 0;
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
 ${InlineMenuStyles}
`;

export default InlineMenu;