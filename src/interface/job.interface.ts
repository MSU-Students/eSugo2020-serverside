import { IApplication } from "./application.interface";
import { IUser } from "./user.interface";

export interface IJob {
  id?: number;
  title: string;
  description?: string;
  location: string;
  salary: string;
  status: 'pending' | 'approved' | 'disapproved' | 'taken' | 'done' | 'canceled';
  coverPhoto: string;
  datePosted?: Date;
  user?: IUser;
  applications?: IApplication[];
}
