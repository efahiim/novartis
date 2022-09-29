import React from 'react';
import { render } from '@testing-library/react';
import Question, { QuestionProps } from '../src/component/Question';

const props: QuestionProps = {
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

describe('<Question />', () => {
  const component = (<Question {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('question')).toBeTruthy();
  });
});
