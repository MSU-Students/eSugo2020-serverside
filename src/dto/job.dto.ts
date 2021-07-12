import { IJob } from '../interface/job.interface';
export class JobDto implements IJob {
    jobID: number;
    employerID: number;
    jobtitle: string;
    jobdesc: string;
    salary: number; 
    dateposted: string;
    jobstatus: string;
}
