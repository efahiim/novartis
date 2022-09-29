import React from 'react';
import { render } from '@testing-library/react';
import Footer, { FooterProps } from '../src/component/Footer';

const props: FooterProps = {
  footerLinks: {
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
  }, 
  socialLinks: [
    {
      type: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      type: 'twitter',
      href: 'https://www.twitter.com',
    },
    {
      type: 'instagram',
      href: 'https://www.instagram.com',
    },
    {
      type: 'youtube',
      href: 'https://www.youtube.com',
    },
  ], 
  copyrightImg: 'https://www.cosentyx.com/themes/custom/novartis_cs_cosentyx/novartis-logo.svg'


};

describe('<Footer />', () => {
  const component = <Footer {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('footer')).toBeTruthy();
  });
});