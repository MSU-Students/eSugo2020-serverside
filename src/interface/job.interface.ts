import { IUser } from "./user.interface";

export interface IJob {
  id?: number;
  title: string;
  description: string;
  location: string;
  salary: number;
  datePosted: Date;
  status: string;
  user: IUser;
}
