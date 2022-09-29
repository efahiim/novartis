import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HintItem } from '@components/hint-item';

export default {
  title: 'Hint Item',
  component: HintItem,
} as ComponentMeta<typeof HintItem>;

const Template: ComponentStory<typeof HintItem> = (args) => <HintItem {...args} />;

export const TwoLines = Template.bind({});
TwoLines.args = {
  label: 'Swipe to see risk factors for psoriatic arthritis.',
};

export const ThreeLines = Template.bind({});
ThreeLines.args = {
  label: 'Swipe to see risk factors for psoriatic arthritis.Swipe to see risk factors ',
};
