import { IJob } from "./job.interface";

export interface IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: Date;
  gender: string;
  type: string;
  email?: string;
  company?: string;
  location?: string;
  username: string;
  password: string;
  jobs: IJob[]
}
