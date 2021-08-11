export class LoginUser {
  constructor(
    public email: string|null = null,
    public password: string|null = null,
  ) {
  }
}

export class RegUser {
  constructor(
    public email: string|null = null,
    public password: string|null = null,
    public location: string|null = null,
  ) {
  }
}

export class User {
  constructor(
    public id: number|null = null,
    public uuid: string|null = null,
    public email: string|null = null,
    public password: string|null = null,
    public firstName: string|null = null,
    public lastName: string|null = null,
    public height: number|null = null,
    public weight: number|null = null,
    public birthday: Date|null = null,
    public gender: number|null = null,
    public isConfirmed: boolean = false,
    public isActive: boolean = true,
    public season: number|null = null,
    public update: Date|null = null,
    public create: Date|null = null,
  ) {
  }
}

export class UpdatePersonal {
  constructor(
    public gender: string|null = null,
    public firstName: string|null = null,
    public lastName: string|null = null,
    public height: number|null = null,
    public weight: number|null = null,
    public birthday: Date = new Date(),
  ) {
  }
}
