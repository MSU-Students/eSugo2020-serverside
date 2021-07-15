import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../interface/user.interface';
export class UserDto implements IUser {
  
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  midlleName?: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  dateofbirth: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  acctStatus: string;

  @ApiProperty()
  acctCategory: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password?: string;
}
