import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NextSectionButton } from '@components/buttons';

export default {
  title: 'Buttons',
  component: NextSectionButton,
} as ComponentMeta<typeof NextSectionButton>;

const Template: ComponentStory<typeof NextSectionButton> = (args) => <NextSectionButton {...args} />;

export const NextSection = Template.bind({});
NextSection.args = {
  sectionId : 'sectionId'
};