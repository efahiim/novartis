import React from 'react';
import styled, { css } from 'styled-components';

export interface ModalProps {
  showModal: boolean;
  setShowModal: (active: boolean) => void;
}

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="14.414" height="14.414" viewBox="0 0 14.414 14.414" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Close icon</title>
    <desc id="svgDesc">Icon to close the modal</desc>
    <g id="X_Icon" data-name="X Icon" transform="translate(0.707 0.707)">
      <line id="Line_1" data-name="Line 1" x2="13" y2="13" transform="translate(13) rotate(90)" fill="none" stroke="#707070" strokeWidth="2" />
      <line id="Line_2" data-name="Line 2" x2="13" y2="13" fill="none" stroke="#707070" strokeWidth="2" />
    </g>
  </svg>
);

const illustration1 = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" width="148.716" height="79.199" aria-labelledby="svgTitle svgDesc" viewBox="0 0.01 146.43 79.19">
    <title id="svgTitle">Illustration image 1</title>
    <desc id="svgDesc">The first illustration image</desc>
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_1906" data-name="Rectangle 1906" width="159.716" height="79.199" transform="translate(0 0)" fill="none" />
      </clipPath>
    </defs>
    <g id="Illustration-PopUp-1" transform="translate(0 0)">
      <g id="Group_1418" data-name="Group 1418">
        <g id="Group_1417" data-name="Group 1417">
          <path id="Path_1050" data-name="Path 1050" d="M90.728,20.569h-37.6A1.426,1.426,0,0,1,51.7,19.144V9.623A1.426,1.426,0,0,1,53.123,8.2h37.6a1.425,1.425,0,0,1,1.425,1.426v9.521a1.425,1.425,0,0,1-1.425,1.425" fill="#dadad3" />
          <path id="Path_1051" data-name="Path 1051" d="M131.733,20.569H99.557a1.322,1.322,0,0,1-1.323-1.322V9.52A1.323,1.323,0,0,1,99.557,8.2h32.176a1.322,1.322,0,0,1,1.322,1.323v9.727a1.322,1.322,0,0,1-1.322,1.322" fill="#dadad3" />
          <rect id="Rectangle_1904" data-name="Rectangle 1904" width="24.309" height="2.183" transform="translate(103.49 13.292)" fill="#707070" />
          <path id="Path_1052" data-name="Path 1052" d="M46.287,20.569H14.111a1.322,1.322,0,0,1-1.323-1.322V9.52A1.323,1.323,0,0,1,14.111,8.2H46.287A1.322,1.322,0,0,1,47.609,9.52v9.727a1.322,1.322,0,0,1-1.322,1.322" fill="#d61a64" />
          <rect id="Rectangle_1905" data-name="Rectangle 1905" width="24.309" height="2.183" transform="translate(18.702 13.292)" fill="#fff" />
          <path id="Path_1053" data-name="Path 1053" d="M8.7,11.427v6.86A2.173,2.173,0,0,1,5.307,19.7L.948,16.627a2.206,2.206,0,0,1-.02-3.61L5.3,9.927a2.165,2.165,0,0,1,3.4,1.5" fill="#d61a64" />
          <path id="Path_1054" data-name="Path 1054" d="M145.515,16.607l-4.3,3.08a2.053,2.053,0,0,1-3.16-.98v-7.83a2.066,2.066,0,0,1,3.16-.95l4.25,3.06a2.216,2.216,0,0,1,.05,3.62" fill="#d61a64" />
          <path id="Path_1055" data-name="Path 1055" d="M36.6,77.39c.18,0,.356.019.533.03.246-.015.491-.03.742-.03Z" fill="#efc7b0" />
          <path id="Path_1056" data-name="Path 1056" d="M102.74,42.977a4.632,4.632,0,0,0-4.662,4.775V43.6c0-3.161-1.648-5.724-4.81-5.724s-4.81,2.563-4.81,5.724V39.4c0-3.372-1.971-6.106-5.344-6.106S77.77,36.025,77.77,39.4V15.736c0-3.372-1.972-6.106-5.344-6.106s-5.344,2.734-5.344,6.106V47.889L62.79,42.525a6.147,6.147,0,0,0-10.409,6.542L67.04,73c1.885,3.015,2.841,6.195,6.213,6.195H102.3c2.928,0,5.4-3.248,5.4-6.176V48.516a5.5,5.5,0,0,0-4.957-5.539" fill="#efc7b0" />
          <path id="Path_1057" data-name="Path 1057" d="M62.352,26.209a1.871,1.871,0,0,0,.3-2.628,12.1,12.1,0,0,1-2.648-7.59,12.25,12.25,0,0,1,24.5,0,12.1,12.1,0,0,1-2.648,7.59,1.87,1.87,0,1,0,2.93,2.325,15.8,15.8,0,0,0,3.459-9.915,15.991,15.991,0,0,0-31.982,0,15.8,15.8,0,0,0,3.458,9.915,1.872,1.872,0,0,0,2.628.3" fill="#d61a64" />
        </g>
      </g>
    </g>
  </svg>
);

const illustration2 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="124.406" height="88.11" viewBox="0 0 124.406 88.11" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Illustration image 2</title>
    <desc id="svgDesc">The second illustration image</desc>
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_1899" data-name="Rectangle 1899" width="124.406" height="88.11" transform="translate(0 0)" fill="none" />
      </clipPath>
    </defs>
    <g id="Illustration-PopUp-2" transform="translate(0 0)">
      <g id="Group_1412" data-name="Group 1412">
        <path id="Path_1036" data-name="Path 1036" d="M0,48.874H0V0A24.289,24.289,0,0,1,9.513,1.921,24.366,24.366,0,0,1,17.28,7.158a24.366,24.366,0,0,1,5.237,7.767,24.3,24.3,0,0,1,1.92,9.512,24.3,24.3,0,0,1-1.921,9.512,24.344,24.344,0,0,1-5.237,7.767,24.366,24.366,0,0,1-7.767,5.237A24.3,24.3,0,0,1,0,48.874" fill="#592c5f" />
        <path id="Path_1037" data-name="Path 1037" d="M13.3,19.457a1.127,1.127,0,0,1-.331.8L8.833,24.394l4.139,4.139a1.128,1.128,0,0,1-1.6,1.595L6.44,25.191a1.129,1.129,0,0,1,0-1.595l4.937-4.937a1.129,1.129,0,0,1,1.926.8" fill="#c8becc" />
        <path id="Path_1038" data-name="Path 1038" d="M92.465,51.8a4.506,4.506,0,0,0-4.492,4.787V52.423c0-3.169-1.652-5.738-4.821-5.738s-4.821,2.569-4.821,5.738V48.215c0-3.38-1.977-6.121-5.357-6.121s-5.357,2.741-5.357,6.121V24.5c0-3.381-1.976-6.121-5.357-6.121S56.9,21.117,56.9,24.5V56.726L52.521,51.35a6.188,6.188,0,0,0-10.495,6.558L56.7,81.9c1.889,3.023,2.849,6.21,6.229,6.21H92.041c2.935,0,5.574-3.256,5.574-6.191V57.355a5.656,5.656,0,0,0-5.15-5.552" fill="#efc7b0" />
        <path id="Path_1039" data-name="Path 1039" d="M49.366,34.64A1.88,1.88,0,0,0,52,34.969a1.859,1.859,0,0,0,.3-2.621,12.11,12.11,0,0,1-2.654-7.6,12.279,12.279,0,0,1,24.558,0,12.128,12.128,0,0,1-2.654,7.609A1.876,1.876,0,0,0,73.021,35.4a1.926,1.926,0,0,0,1.469-.761,16.324,16.324,0,0,0,3.435-9.2H86.9v1.3a2.084,2.084,0,0,0,3.3,1.808l4.308-3.073a2.206,2.206,0,0,0-.043-3.616l-4.244-3.073a2.1,2.1,0,0,0-3.32,1.808v1.1H77.678a16.025,16.025,0,0,0-31.5,0h-9.1v-1.1a2.17,2.17,0,0,0-3.421-1.808l-4.369,3.073a2.206,2.206,0,0,0,.012,3.616l4.351,3.073a2.174,2.174,0,0,0,3.427-1.808v-1.3h8.849a16.323,16.323,0,0,0,3.434,9.2" fill="#d61a64" />
        <path id="Path_1040" data-name="Path 1040" d="M124.406.766h0V49.75a24.5,24.5,0,0,1-9.534-47.058A24.339,24.339,0,0,1,124.406.766" fill="#d60e63" />
        <path id="Path_1041" data-name="Path 1041" d="M111.073,30.25a1.132,1.132,0,0,1,.331-.8l4.149-4.148L111.4,21.153a1.13,1.13,0,1,1,1.6-1.6l4.948,4.948a1.131,1.131,0,0,1,0,1.6h0L113,31.05a1.131,1.131,0,0,1-1.93-.8" fill="#eabacd" />
      </g>
    </g>
  </svg>
);

const illustration3 = (
  <svg id="Illustration-PopUp-3" xmlns="http://www.w3.org/2000/svg" width="97.326" height="128.462" viewBox="0 0 97.326 133.462" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Illustration image 3</title>
    <desc id="svgDesc">The third illustration image</desc>
    <defs>
      <clipPath id="clip-path">
        <rect id="Rectangle_1900" data-name="Rectangle 1900" width="97.326" height="133.462" fill="none" />
      </clipPath>
    </defs>
    <g id="Group_1414" data-name="Group 1414">
      <path id="Path_1042" data-name="Path 1042" d="M36.269,96.908c0,.1-.011.2-.018.294.009.128.018.256.018.389Z" fill="#666" />
      <path id="Path_1043" data-name="Path 1043" d="M39.6,72.407H63.32c3.381,0,6.121-1.977,6.121-5.357s-2.74-5.357-6.121-5.357H31.092l5.375-4.344a6.2,6.2,0,0,0,1.934-8.5,6.124,6.124,0,0,0-8.432-1.965L6.064,61.545C3.041,63.434,0,64.414,0,67.794V96.908c0,2.935,2.964,5.5,5.9,5.5H30.463a6.1,6.1,0,0,0,5.788-5.382c-.18-2.695-2.221-4.26-5.023-4.26H35.4c3.169,0,5.738-1.652,5.738-4.821s-2.569-4.821-5.738-4.821H39.6c3.38,0,6.121-1.977,6.121-5.357s-2.741-5.357-6.121-5.357" fill="#efc7b0" />
      <path id="Path_1044" data-name="Path 1044" d="M79.252,66.795A16.411,16.411,0,0,0,66.424,51.088V41.337h.8a2.143,2.143,0,0,0,1.808-3.383L66.105,33.6a2.205,2.205,0,0,0-3.616.022L59.81,37.944a2.15,2.15,0,0,0,1.808,3.393h1.057v9.451a15.34,15.34,0,0,0-9.469,3.444,1.882,1.882,0,0,0-.342,2.635,1.851,1.851,0,0,0,2.614.3,12.1,12.1,0,0,1,7.6-2.654,12.279,12.279,0,0,1-.008,24.558,12.126,12.126,0,0,1-7.608-2.653,1.852,1.852,0,1,0-2.254,2.936A15.329,15.329,0,0,0,62.675,82.8v8.354H61.618a2.306,2.306,0,0,0-1.808,3.605l2.955,4.448a2.206,2.206,0,0,0,3.616.034l2.655-4.5a2.293,2.293,0,0,0-1.808-3.587h-.8V82.5A16.411,16.411,0,0,0,79.252,66.795" fill="#d61a64" />
      <path id="Path_1045" data-name="Path 1045" d="M36.051,0H93.968a3.357,3.357,0,0,1,3.358,3.358V21.824a3.357,3.357,0,0,1-3.358,3.358H36.051a3.359,3.359,0,0,1-3.358-3.358V3.358A3.358,3.358,0,0,1,36.051,0" fill="#dadad3" />
      <path id="Path_1046" data-name="Path 1046" d="M70.856,16.726a1.237,1.237,0,0,1-.877-.363l-4.55-4.55-4.549,4.55a1.24,1.24,0,0,1-1.8-1.7l.048-.048,5.427-5.429a1.24,1.24,0,0,1,1.753,0h0l5.426,5.429a1.241,1.241,0,0,1-.877,2.115" fill="#707070" />
      <path id="Path_1047" data-name="Path 1047" d="M93.969,133.462H36.052a3.357,3.357,0,0,1-3.358-3.358V111.638a3.358,3.358,0,0,1,3.358-3.358H93.969a3.359,3.359,0,0,1,3.358,3.358V130.1a3.358,3.358,0,0,1-3.358,3.358" fill="#dadad3" />
      <path id="Path_1048" data-name="Path 1048" d="M59.165,116.737a1.237,1.237,0,0,1,.877.363l4.55,4.55,4.549-4.55a1.24,1.24,0,0,1,1.8,1.7c-.016.016-.032.033-.048.048l-5.427,5.429a1.24,1.24,0,0,1-1.753,0h0l-5.426-5.429a1.241,1.241,0,0,1,.877-2.115" fill="#707070" />
    </g>
  </svg>
);

/**
 * modal component
 * @param {Function} showModal - This is a boolean whether the modal will be shown or not.
 * @param {Function} setShowModal - This is a boolean function which can be called.
 */

const Modal = ({ setShowModal }: ModalProps): JSX.Element => {

  return (
    <StyleWrapper className='modal' data-testid='modal'>
      <div className='modal__dialog'>
        <button 
          type='button' 
          className='btn-close' 
          aria-label='Close' 
          onClick={
            (): void => setShowModal(false)
          }>
          {closeIcon}
        </button>

        <p className='modal__title'>READY TO START EXPLORING? </p>
        <p className='modal__subtitle'>
            Here's a quick tip to help you navigate our page. You can explore to the left, right,
            up, and down. We'll show you where to go!
        </p>

        <div className='modal__body'>
          <div className='illustration'>
            <span className='illustration__img' >{illustration1}</span>
            <p className='illustration__text'>SCROLL <span className='illustration__text--pink'>LEFT &amp; RIGHT</span> TO SEE OTHER TOPICS IN THE MENU BAR</p>
          </div>
          <div className='illustration'>
            <span className='illustration__img' >{illustration2}</span>
            <p className='illustration__text'>TAP ARROW BUTTONS OR SWIPE <span className='illustration__text--pink'>LEFT &amp; RIGHT</span></p>
          </div>
          <div className='illustration'>
            <span className='illustration__img' >{illustration3}</span>
            <p className='illustration__text'>TAP ARROW BUTTONS OR SWIPE <span className='illustration__text--pink'>UP &amp; DOWN</span></p>
          </div>
        </div>

      </div>
    </StyleWrapper>
  );
};

const ModalStyles = css`
  &.modal {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: #707070BF;
      z-index: 99;

      @media (min-width: 992px) {
        display: none;
      }
  }

  .modal__dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 357px;
    width: 100%;
    max-height: calc(100vh - 10px);
    padding: 38px 36px 20px;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 8px;
    background: var(--white);
    overflow-y: auto;
    scrollbar-width: none;

    @media (min-width: 992px) {
      max-width: 700px;
      padding: 36px 100px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .modal__title {
    margin-bottom: 9px;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    text-transform: uppercase;
    font-family: var(--font-primary-bold);
    color: var(--dark-pink);
  }

  .modal__subtitle {
    margin-bottom: 32px;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    font-family: var(--font-primary);
    color: var(--grey-900);
  }

  .illustration {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .illustration__img {
    width: 100%;
    height: auto;
  }

  .illustration__text {
    position: relative;
    max-width: 110px;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    font-family: var(--font-primary-medium);
    text-transform: uppercase;
    background-color: var(--grey-100);

    &--pink {
      font-family: var(--font-primary-bold);
      color: var(--dark-pink);
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -8%;
      width: 17px;
      height: 17px;
      background-color: var(--grey-100);
      transform: translateY(-50%) rotate(45deg);
      z-index: -1;
    }

    @media (min-width: 992px) {
      max-width: 310px;

      &::before {
        left: -3%;
      }
    }
  }

  .btn-close {
    position: absolute;
    top: 17px;
    right: 17px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
  ${ModalStyles}
`;

export default Modal;
