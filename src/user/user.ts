export class User {
  constructor(
    private readonly id: number,
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly isActive: boolean,
  ) {}
}
