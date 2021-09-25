import {MentalState} from './mentalState';

export interface Questionnaire {
  description: string;
  questions: Array<Question>;
  answer?: Answer;
}

export interface Question {
  id: number;
  text: string;
  orderNumber: number;
  mentalState: MentalState;
}

export interface Answer {
  id: number;
  text: string;
  order_number: number;
}
