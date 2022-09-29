import { css } from 'styled-components';

export const typoStyles = css`
  @font-face {
    font-family: 'Barlow-Regular';
    src: url('../assets/fonts/barlow-regular.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Barlow-Medium';
    src: url('../assets/fonts/barlow-medium.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Barlow-SemiBold';
    src: url('../assets/fonts/barlow-semibold.otf') format('opentype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Barlow-Bold';
    src: url('../assets/fonts/barlow-bold.otf') format('opentype');
    font-display: swap;
  }
`;

export default typoStyles;
