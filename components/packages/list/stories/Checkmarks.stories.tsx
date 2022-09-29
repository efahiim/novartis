import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkmarks } from '@components/list';

export default {
  title: 'List',
} as ComponentMeta<typeof Checkmarks>;

const Template: ComponentStory<typeof Checkmarks> = (args) => <Checkmarks {...args} />;

export const CheckmarkList = Template.bind({});
CheckmarkList.args = {
  list: ['Checkmark 1', 'Checkmark 2', 'Checkmark 3']
};
