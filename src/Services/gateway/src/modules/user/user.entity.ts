import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNumberString,
  IsString,
} from 'class-validator';

export class User {
  @IsNumberString()
  id: number;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  uid: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsBoolean()
  isActive: boolean;
}
