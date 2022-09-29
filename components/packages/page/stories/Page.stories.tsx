import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from '@components/page';

export default {
  title: 'Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => <Page />;

export const PSO = Template.bind({});
