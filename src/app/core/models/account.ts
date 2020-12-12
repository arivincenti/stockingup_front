import { User } from './user';

export class Account {
  constructor(public user: User, public token: string) {}
}
