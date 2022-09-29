import { Modal } from '@components/modal';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Cookies from 'universal-cookie';

/**
 * Navigation help icon component
 */

const NavigationHelp = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const cookies = new Cookies('modal');

  useEffect(()=>{
    if (cookies.get('modal')) { // Modal does not open if cookie exists
      null;
    } else if (!cookies.get('modal')) { // If cookie is not found, create a cookie and shows modal.
      cookies.set('modal', 'true', {
        path: '/',
      });
      setShowModal(true);
    }
  },[]);

  const onClick = (): void => { // Check modal previous state and open modal if its state is false
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [showModal]);

  return (
    <>
      <StyleWrapper className='navigation-help' data-testid='navigation-help'>
        <button className='navigation-help__button' onClick={onClick}>
          <span className='navigation-help__info'>i</span>
        </button>
      </StyleWrapper>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

const NavigationHelpStyles = css`
  &.navigation-help {
    position: absolute;
    right: 0;
    top: 80px;
    width: 30px;
    height: 32px;
    box-shadow: -1px 1px 1px 1px rgba(0,0,0,0.05);

    @media (min-width: 992px) {
      display: none;
    }
  }

  .navigation-help__button {
    width: 100%;
    height: 100%;
    background-color: var(--white);
    border-bottom-left-radius: 5px;
    border: 0;
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: var(--dark-pink);

      .navigation-help__info {
        color: var(--white);
        border-color: var(--white);
      }
    }
  }

  .navigation-help__info {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 18px;
    border: 1px solid var(--grey-200);
    border-radius: 50%;
    font-size: 12px;
    line-height: 12px;
    color: var(--grey-200);
    font-family: var(--font-primary-medium);
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`${NavigationHelpStyles}
`;

export default NavigationHelp;
