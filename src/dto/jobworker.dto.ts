import { ApiProperty } from '@nestjs/swagger';
import { IJobworker } from '../interface/jobworker.interface';
export class JobworkerDto implements IJobworker {

    @ApiProperty()
    jobworkerID: number;

    @ApiProperty()
    jobID: number;

    @ApiProperty()
    workerID: number;

    @ApiProperty()
    jobworkerstatus: string;
    }
