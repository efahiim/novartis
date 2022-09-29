import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialMediaIcon } from '@components/icons';

export default {
  title: 'Icons',
  component: SocialMediaIcon,
} as ComponentMeta<typeof SocialMediaIcon>;

const Template: ComponentStory<typeof SocialMediaIcon> = (args) => <SocialMediaIcon {...args} />;

export const SocialMedia = Template.bind({});
SocialMedia.args = {
  type: 'facebook',
  href: '#'
};