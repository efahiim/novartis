import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '@components/navigation';

export default {
  title: 'Navigation',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const SingleLink = Template.bind({});
SingleLink.args = {
  label: 'Get the fact',
  path: 'https://www.google.com',
  selected: true,
  target: '_self'
};

