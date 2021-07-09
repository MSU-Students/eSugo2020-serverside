import { Jobworker } from './jobworker.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJobworkerDto } from 'src/dto/create-jobworker.dto';
import { JobworkerDto } from 'src/dto/jobworker.dto';
import { Repository } from 'typeorm';
@Injectable()
export class JobworkerService {
    constructor(@InjectRepository(Jobworker) private jobworkerRepository:Repository<Jobworker>) {}
    async create(jobworker: CreateJobworkerDto): Promise<JobworkerDto> {
        return this.jobworkerRepository.save(jobworker);
    }
    findOne(id: number) {
        return this.jobworkerRepository.findOne(id);
    }
    async update(jobworker: JobworkerDto): Promise<JobworkerDto> {
        return this.jobworkerRepository.save(jobworker);
    }
    deleteOne(id: number) {
        return this.jobworkerRepository.delete(id);
    }
}
