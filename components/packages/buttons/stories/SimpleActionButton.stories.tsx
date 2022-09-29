import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleActionButton } from '@components/buttons';

export default {
  title: 'Buttons',
  component: SimpleActionButton,
} as ComponentMeta<typeof SimpleActionButton>;

const Template: ComponentStory<typeof SimpleActionButton> = (args) => <SimpleActionButton {...args} />;

export const SimpleAction = Template.bind({});
SimpleAction.args = {
  color: 'pink',
  label: 'Yes',
};
