import { IJob } from "./job.interface";

export interface IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: string;
  gender: string;
  address?: string;
  contact?: string;
  email?: string;
  company?: string;
  location?: string;
  type: 'worker' | 'employer' | 'moderator' | 'admin';
  status: 'available' | 'suspended' | 'banned';
  username: string;
  password: string;
  refreshToken?: string;
  jobs?: IJob[]
}
