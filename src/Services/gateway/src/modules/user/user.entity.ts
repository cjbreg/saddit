import { IsEmail, IsNumberString } from 'class-validator';

export class User {
  @IsNumberString() // TODO: implement validator
  id: number;

  username: string;
  email: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
