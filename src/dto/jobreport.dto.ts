import { ApiProperty } from '@nestjs/swagger';
import { IJobreport } from '../interface/jobreport.interface';
export class JobreportDto implements IJobreport {

    @ApiProperty()
    jobreportID: number;

    @ApiProperty()
    userID: number;

    @ApiProperty()
    jobID: number;


}
