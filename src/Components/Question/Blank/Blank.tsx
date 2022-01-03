import React, {FC} from 'react';
import {IQuestion} from '../../../common/types';
import {BlankPlaceHolder, BlankWrapper, Word} from './styled';

interface IBlankProps extends Pick<IQuestion, 'dictionary' | 'correctOption'> {}

const Blank: FC<IBlankProps> = ({dictionary, correctOption}) => {
  let blankSpaces = '';
  for (let i = 0; i < correctOption.length; i++) {
    blankSpaces += '_';
  }

  return (
    <BlankWrapper>
      {dictionary.map(({word}) => {
        return word === correctOption ? (
          <>
            {' '}
            <BlankPlaceHolder>{blankSpaces}</BlankPlaceHolder>
          </>
        ) : (
          <Word> {word}</Word>
        );
      })}
    </BlankWrapper>
  );
};

export default Blank;
