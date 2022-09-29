import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PillButton } from '@components/buttons';

export default {
  title: 'Buttons',
  component: PillButton,
} as ComponentMeta<typeof PillButton>;

const Template: ComponentStory<typeof PillButton> = (args) => <PillButton {...args} />;

export const PillLeftFullSized = Template.bind({});
PillLeftFullSized.args = {
  fullSize: true,
  direction: 'left',
  label: 'Return to start',
  color: 'purple'
};

export const PillRightFullSized = Template.bind({});
PillRightFullSized.args = {
  fullSize: true,
  direction: 'right',
  label: 'Return to start',
  color: 'pink'
};

export const PillLeftSmallSized = Template.bind({});
PillLeftSmallSized.args = {
  fullSize: false,
  direction: 'left',
  label: 'Return to start',
  color: 'purple'
};

export const PillRightSmallSized = Template.bind({});
PillRightSmallSized.args = {
  fullSize: false,
  direction: 'right',
  label: 'Return to start',
  color: 'pink'
};
