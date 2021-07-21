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
    findAll(): Promise<JobDto[]> {
        return this.jobRepository.find();
    }
    async update(id: number, job: JobDto) {
        return await this.jobRepository.update(id, job)
    }
   async delete(id: number) {
       await this.jobRepository.delete(id);
    }
}