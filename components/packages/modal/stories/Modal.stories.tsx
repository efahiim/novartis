import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '@components/modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  showModal: true,
};
