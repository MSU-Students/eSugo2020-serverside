import { IUser } from '../interface/user.interface';
export class UserDto implements IUser {
  id: number;
  
  firstName: string;
  midlleName?: string;
  lastName: string;
  username: string;
  password?: string;
}
