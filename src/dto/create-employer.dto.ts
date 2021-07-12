import { ApiProperty } from '@nestjs/swagger';
import { IEmployer } from './../interface/employer.interface';
export class CreateEmployerDto implements IEmployer {

  @ApiProperty()
  id: number;
  
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName?: string;

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
  username: string;

  @ApiProperty()
  password?: string;
  }