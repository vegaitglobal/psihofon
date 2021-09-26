export interface MentalState {
  id: number;
  name: string;
  exerciseListLabel: string;
  exercises?: Array<MentalStateExercise>;
}

export interface MentalStateExercise {
  id: number;
  title: string;
  description: string;
  recommendation: string;
}
