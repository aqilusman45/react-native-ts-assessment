import React from 'react';
import {QuestionType} from './common/types';
import Question from './Components/Question/Question';
import AppWrapper from './Components/Wrapper/Wrapper';

const QUESTION_DATA = {
  type: QuestionType.Blanks,
  incorrectOptions: ['folgen', 'Schaf', 'Bereiden'],
  correctOption: 'Hause',
  dictionary: [
    {
      word: 'Hause',
      translation: 'House',
      order: 2,
    },
    {
      word: 'Das',
      translation: 'The',
      order: 1,
    },
    {
      word: 'klein',
      translation: 'small',
      order: 4,
    },
    {
      word: 'ist',
      translation: 'is',
      order: 3,
    },
  ],
};

const EXERCISE_DATA = {
  questions: [QUESTION_DATA],
};

const App = () => {
  return (
    <AppWrapper>
      <Question {...EXERCISE_DATA.questions[0]} />
    </AppWrapper>
  );
};

export default App;
