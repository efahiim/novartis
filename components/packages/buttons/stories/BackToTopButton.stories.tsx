import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackToTopButton } from '@components/buttons';

export default {
  title: 'Buttons',
  component: BackToTopButton,
} as ComponentMeta<typeof BackToTopButton>;

const Template: ComponentStory<typeof BackToTopButton> = (args) => <BackToTopButton {...args} />;

export const BackToTop = Template.bind({});
BackToTop.args = {
  color: 'purple',
  mobileVersion: false
};