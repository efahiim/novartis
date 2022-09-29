import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MiscButton } from '@components/buttons';

export default {
  title: 'Buttons',
  component: MiscButton,
} as ComponentMeta<typeof MiscButton>;

const Template: ComponentStory<typeof MiscButton> = (args) => <MiscButton {...args} />;

export const MiscLeft = Template.bind({});
MiscLeft.args = {
  direction: 'left',
  label: 'The Systemic Difference',
  color: 'purple'
};

export const MiscRight = Template.bind({});
MiscRight.args = {
  direction: 'right',
  label: 'Visible & Invisible',
  color: 'pink'
};