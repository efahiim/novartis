import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLinks } from '@components/footer-links';

export default {
  title: 'Footer',
  component: FooterLinks,
} as ComponentMeta<typeof FooterLinks>;

const Template: ComponentStory<typeof FooterLinks> = (args) => <FooterLinks {...args} />;

export const Links = Template.bind({});
Links.args = {
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
