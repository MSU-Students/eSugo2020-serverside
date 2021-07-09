import { IJobworker } from '../interface/jobworker.interface';
export class JobworkerDto implements IJobworker {
    jobworkerID: number;
    jobID: number;
    workerID: number;
    jobworkerstatus: string;
    }
