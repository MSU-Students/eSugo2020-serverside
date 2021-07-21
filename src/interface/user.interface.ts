import { IJob } from './job.interface';

export interface IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  password: string;
  jobs?: IJob[];
}
