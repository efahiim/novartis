import { css } from 'styled-components';

const rootColorStyles = css`
  :root {
    --white: #FFFFFF;
    --black: #000000;
    --dark-purple: #592C5F;
    --light-purple: #c8becc;
    --dark-pink: #D60E63;
    --light-pink: #EABACD;
    --grey-100: #F6F6F6;
    --grey-200: #707070;
    --grey-300: #DADAD3;
    --grey-800: #58595B;
    --grey-900: #444444;
    --gradient: linear-gradient(to right, var(--dark-purple), #772b69, #97266d, #b81c6b, var(--dark-pink));
    --gradient-bottom-right: linear-gradient(to right bottom, var(--dark-purple), #772b69, #97266d, #b81c6b, var(--dark-pink));
  }
`;

export default rootColorStyles;
