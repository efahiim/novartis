import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationHelp } from '@components/navigation-help';

export default {
  title: 'Navigation',
  component: NavigationHelp,
} as ComponentMeta<typeof NavigationHelp>;

const Template: ComponentStory<typeof NavigationHelp> = () => <NavigationHelp />;

export const HelpIcon = Template.bind({});
