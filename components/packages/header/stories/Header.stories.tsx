import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '@components/header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const MainBar = Template.bind({});
MainBar.args = {
  logo: {
    imageSrc: '/assets/images/logo.png',
    imageAlt: 'Cosentyx',
    imageLink: '/',
    leftText: '[For people 6+ with moderate to severe plaque psoriasis.]',
    rightText: 'For US Residents',
  },
  dropdown: {
    title: 'Prescribing & Patient Information',
    items: [
      {
        label: 'FDA Prescribing Information',
        path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf',
      },
      {
        label: 'Medication guide',
        path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx_pmg.pdf',
      },
      {
        label: 'Instructions for Use - Prefilled Syringe 75 mg',
        path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=34',
      },
      {
        label: 'Instructions for Use - Prefilled Syringe 150 mg',
        path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=30',
      },
      {
        label: 'Instructions for Use - Sensoready® pen 150 mg',
        path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=38',
      },
    ],
  }
};
