export interface MentalState {
  id: number;
  name: string;
  exercise?: Array<MentalStateExercise>;
}

export interface MentalStateExercise {
  id: number;
  title: string;
  description: string;
  recommendation: string;
}
