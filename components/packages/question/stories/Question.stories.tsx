import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Question } from '@components/question';

export default {
  title: 'Question & Answers',
  component: Question,
} as ComponentMeta<typeof Question>;

const Template: ComponentStory<typeof Question> = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: 'Are you interested in new ways to manage plaque psoriasis?',
  display: '1 per line',
  answers: [
    {
      label: 'B',
      text: 'No – My comfort with hobbies and activities isn’t a problem for me.',
      color: 'purple'
    },
    {
      label: 'A',
      text: 'Yes – My comfort with hobbies and activities isn’t a problem for me.',
      color: 'pink'
    }
  ]
};
