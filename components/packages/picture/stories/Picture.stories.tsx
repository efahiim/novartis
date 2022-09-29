import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Picture } from '@components/picture';

export default {
  title: 'Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => <Picture {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<img src="" key={1}/>],
};
