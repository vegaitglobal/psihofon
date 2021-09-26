export interface Questionnaire {
  description: string;
  questions: Array<Question>;
  answers: Array<Answer>;
}

export interface Question {
  id: number;
  text: string;
  orderNumber: number;
  mentalState: {
    id: number;
    name: string;
  };
}

export interface Answer {
  id: number;
  text: string;
  orderNumber: number;
}
