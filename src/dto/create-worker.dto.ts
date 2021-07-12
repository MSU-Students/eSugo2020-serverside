import { ApiProperty } from '@nestjs/swagger';
import { IWorker } from './../interface/worker.interface';
export class CreateWorkerDto implements IWorker {

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