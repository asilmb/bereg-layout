export class Exercise {
  constructor(
    public id: number| null = null,
    public uuid: string| null = null,
    public day: number|null = null,
    public title: string|null = null,
    public description: string|null = null,
    public type: string|null = null,
    public sets: number|null = null,
    public reps: number|null = null,
    public kcal: number|null = null,
    public completed: boolean = false,
    public update: Date = new Date(),
    public create: Date = new Date()
  ) {
  }
}
