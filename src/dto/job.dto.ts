import { ApiProperty } from '@nestjs/swagger';
import { IJob } from '../interface/job.interface';
export class JobDto implements IJob {

    @ApiProperty()
    jobID: number;

    @ApiProperty()
    employerID: number;

    @ApiProperty()
    jobtitle: string;

    @ApiProperty()
    jobdesc: string;

    @ApiProperty()
    salary: number;
    
    @ApiProperty()
    dateposted: string;

    @ApiProperty()
    jobstatus: string;
}
