import React, {FC} from 'react';
import {View} from 'react-native';
import {IQuestion} from '../../common/types';
import ExerciseText from '../ExerciseText/ExerciseText';
import Sentence from './Sentence/Sentence';
import orderBy from 'lodash/orderBy';
import Blank from './Blank/Blank';

interface IQuestionProps extends IQuestion {}

const Question: FC<IQuestionProps> = ({
  incorrectOptions,
  correctOption,
  dictionary,
}) => {
  const sortedDictionary = orderBy(dictionary, 'order', 'asc');
  return (
    <View>
      <ExerciseText />
      <Sentence correctOption={correctOption} dictionary={sortedDictionary} />
      <Blank correctOption={correctOption} dictionary={sortedDictionary} />
    </View>
  );
};

export default Question;
