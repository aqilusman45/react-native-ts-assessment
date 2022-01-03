export enum QuestionType {
  Blanks = 'FillInTheBlanks',
  MCQs = 'MCQs',
  FreeForm = 'FreeForm',
}

export interface IDictionary {
  word: string;
  translation: string;
  order: number;
}

export interface IQuestion {
  type: QuestionType;
  incorrectOptions: string[];
  correctOption: string;
  dictionary: IDictionary[];
}

export interface IExercise {
  questions: IQuestion[];
}
