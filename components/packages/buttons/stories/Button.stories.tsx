import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@components/buttons';

export default {
  title: 'Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  size: 'large',
  label: 'Primary button'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  primary: false,
  size: 'large',
  label: 'Secondary button'
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  primary: false,
  size: 'small',
  label: 'Small secondary button'
};
