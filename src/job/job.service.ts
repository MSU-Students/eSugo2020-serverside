import { Job } from './job.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJobDto } from 'src/dto/create-job.dto';
import { JobDto } from 'src/dto/job.dto';
import { Repository } from 'typeorm';
@Injectable()
export class JobService {
    constructor(@InjectRepository(Job) private jobRepository:Repository<Job>) {}
    async create(job: CreateJobDto): Promise<JobDto> {
        return this.jobRepository.save(job);
    }
    findOne(id: number) {
        return this.jobRepository.findOne(id);
    }
    async update(job: JobDto): Promise<JobDto> {
        return this.jobRepository.save(job);
    }
    deleteOne(id: number) {
        return this.jobRepository.delete(id);
    }
}
