import { SimpleActionButton } from '@components/buttons';
import React from 'react';
import styled, { css } from 'styled-components';

interface AnswerProps {
  label: string; // 'A' or 'B'
  text: string; // Text of the button.
  color?: 'pink' | 'purple'; // Color of the button.
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

export interface QuestionProps {
  question: string;
  answers: AnswerProps[];
  display: string;
};

/**
 * Function to generate buttons based on display prop.
 * @param {AnswerProps[]} answers - This is an array of Answer buttons.
*/
const generateButtons = (answers: AnswerProps[], display: string): JSX.Element[] => {
  const components: JSX.Element[] = [];
  answers.map((answer: AnswerProps, index: number): void => {
    if (display === 'All on one line' || display === '2 per line') {
      components.push(
        <SimpleActionButton
          key={index}
          label={answer.text}
          color={index % 2 !== 0 ? 'pink' : 'purple'}
          onClick={answer.onClick}
          onKeyDown={answer.onKeyDown}
        />
      );
    } else {
      components.push(
        <button
          key={index}
          className={['question__button', `question__button--${answer.color}`].join(' ')}
          onClick={answer.onClick}
          onKeyDown={answer.onKeyDown}
        >
          <span className='question__label'>{answer.label}</span>
          <span className='question__text'>{answer.text}</span>
        </button>
      );
    }
  });
  
  return components;
};

/**
 * Question & Answers component
 * @param {string} question - This is the question text.
 * @param {AnswerProps[]} answers - This is an array of Answer buttons.
 * @param {string} display - This prop determines how to display the answers.
*/
const Question = ({
  question,
  answers,
  display
}: QuestionProps): JSX.Element => {
  return (
    <StyleWrapper
      data-testid="question"
      className='question'
    >
      <p className='question__title'>{question}</p>
      <div className='question__buttons'>
        {
          answers.length <= 2 ? generateButtons(answers, display) : (<div className='quadrant-answers'>{generateButtons(answers, display)}</div>)
        }
      </div>
    </StyleWrapper>
  );
};

const QuestionStyles = css`
  &.question {
    .question__title {
      font-size: 16px;
      font-family: var(--font-primary-bold);
    }

    .question__button {
      min-height: 53px;
      width: 100%;
      background-color: transparent;
      border-radius: 3px;
      padding: 0;
      display: flex;
      align-items: center;
      margin: 20px 0;
      cursor: default;

      @media (min-width: 992px) {
        width: 350px;
      }

      &.question__button--pink {
        border: 1px solid var(--dark-pink);
        
        .question__label {
          background-color: var(--dark-pink);
        }

        .question__text {
          color: var(--dark-pink);
        }
      }
      &.question__button--purple {
        border: 1px solid var(--dark-purple);

        .question__label {
          background-color: var(--dark-purple);
        }

        .question__text {
          color: var(--dark-purple);
        }
      }
    }

    .question__label {
      font-family: var(--font-primary-semibold);
      color: var(--white);
      font-size: 32px;
      line-height: 1.4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 2px;
      height: 100%;
      min-height: 53px;
      width: 50px;
    }

    .question__text {
      font-family: var(--font-primary);
      font-size: 14px;
      text-align: left;
      flex: 1;
      height: 100%;
      padding: 0 15px;

      @media (min-width: 992px){
        font-size: 16px;
      }

    }

    .quadrant-answers {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      gap: 20px;
      justify-content: space-between;

      @media (min-width: 992px){
        justify-content: flex-start;
      }

      button {
        margin: 0;
        min-width: 130px;
        min-height: 49px;
        border-radius: 2px;

        @media (min-width: 992px){
          width: 205px;
          height: 70px;
        }

      }
    }
  }
`; 

const StyleWrapper = styled.div<{className?:string}>`${QuestionStyles}`;

export default Question;
