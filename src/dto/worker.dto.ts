import { IWorker } from '../interface/worker.interface';
export class WorkerDto implements IWorker {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateofbirth: string;
  gender: string;
  email: string;
  acctStatus: string;
  username: string;
  password?: string;
}
