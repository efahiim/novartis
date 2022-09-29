import React from 'react';
import { render } from '@testing-library/react';
import FooterLinks, { FooterLinksProps } from '../src/component/FooterLinks';

const props: FooterLinksProps = {
  firstLinksCollection: [
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX About',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX Contact',
      path: 'https://www.google.com',
      target: '_self'
    },
  ],
  secondLinksCollection: [
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX Contact',
      path: 'https://www.google.com',
      target: '_self'
    },
  ],
  thirdLinksCollection: [
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
  ],
  fourthLinksCollection: [
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
    {
      label: 'COSENTYX Home',
      path: 'https://www.google.com',
      target: '_self'
    },
  ]

};

describe('<FooterLinks />', () => {
  const component = <FooterLinks {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('footer-links')).toBeTruthy();
  });
});