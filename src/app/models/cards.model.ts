export class CardsExercise {
  constructor(
    public image: string,
    public complete: boolean = false,
  ) {
  }
}
export const EXERCISE = [
  new CardsExercise('assets/images/icons/1.png'),
  new CardsExercise('assets/images/icons/2.png'),
  new CardsExercise('assets/images/icons/3.png'),
  new CardsExercise('assets/images/icons/4.png')
];
