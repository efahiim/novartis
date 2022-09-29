import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '@components/footer';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
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
