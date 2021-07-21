import { IUser } from './user.interface';

export interface IJob {
  id?: number;
  jobtitle: string;
  jobdesc: string;
  location: string;
  salary: number;
  dateposted: Date;
  jobstatus: string;
  user: IUser;
}
