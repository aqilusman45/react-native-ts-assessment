import React, {FC} from 'react';
import {IExercise} from '../../common/types';
import {StyledExerciseText} from './styled';

interface IExerciseTextProps {
  text?: string;
}

const DEFAULT_TEXT = 'Fill in the missing word';

const ExerciseText: FC<IExerciseTextProps> = ({text = DEFAULT_TEXT}) => (
  <StyledExerciseText>{text}</StyledExerciseText>
);

export default ExerciseText;
