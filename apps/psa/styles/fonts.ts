import { css } from 'styled-components';

const rootFontStyles = css`
  :root {
    --font-primary: 'Barlow-Regular';
    --font-primary-medium: 'Barlow-Medium';
    --font-primary-semibold: 'Barlow-SemiBold';
    --font-primary-bold: 'Barlow-Bold';
  }

  body {
    font-family: var(--font-primary), Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1 {
    font-family: var(--font-primary-bold), Arial, Helvetica, sans-serif;
    font-size: 32px;
  }

  h2 {
    font-family: var(--font-primary-semibold), Arial, Helvetica, sans-serif;
    font-size: 20px;

    @media (min-width: 992px) {
      font-size: 32px;
    }

  }

  h3 {
    font-family: var(--font-primary), Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 14px;
    font-weight: normal;
    letter-spacing: 1px;
  }

  p {
    font-family: var(--font-primary);
    font-size: 16px;
    line-height: 22px;
    text-align: left;
    color: var(--grey-900);
  }

  small {
    font-family: var(--font-primary-medium);
    font-size: 14px;
    line-height: 17px;
    color: var(--dark-purple);
  }

  i {
    font-style: italic;
  }

  a {
    font-family: var(--font-primary);
    text-decoration: underline;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark-pink);
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: var(--grey-900);
  }

  li::before {
    content: '•';
    display: inline-block;
    font-size: 16px;
    width: 19px;
    height: 25px;
    color: var(--dark-pink);
    text-indent: 8px;
  }

  b,
  strong {
    font-family: var(--font-primary-bold);
    font-weight: bold;
  }

  span {
    font-family: var(--font-primary-medium);
    color: var(--dark-pink);
  }

  em {
    font-family: var(--font-primary);
    color: var(--dark-pink);
  }
`;

export default rootFontStyles;
