import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '@components/dropdown';

export default {
  title: 'Header',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
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
};
