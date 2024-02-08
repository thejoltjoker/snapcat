export class User {
  constructor(
    public userId: string,
    public username: string,
    public fullName: string,
    public followers: number,
    public following: number,
    public bio?: string,
    public role?: string,
    public profilePictureName?: string,
  ) {}
}
