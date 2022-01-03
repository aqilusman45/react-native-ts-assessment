import React, {FC} from 'react';
import {IQuestion} from '../../../common/types';
import {SenteceWrapper, Word, HightlightedWord} from './styled';

interface ISentenceProps
  extends Pick<IQuestion, 'dictionary' | 'correctOption'> {}

const Sentence: FC<ISentenceProps> = ({dictionary, correctOption}) => {
  return (
    <>
      <SenteceWrapper>
        {dictionary.map(({translation, word}) => {
          return word === correctOption ? (
            <>
              {' '}
              <HightlightedWord>{translation}</HightlightedWord>
            </>
          ) : (
            <Word> {translation}</Word>
          );
        })}
        .
      </SenteceWrapper>
    </>
  );
};

export default Sentence;
