import { IEmployer } from '../interface/employer.interface';
export class EmployerDto implements IEmployer {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  username: string;
  password?: string;
}
