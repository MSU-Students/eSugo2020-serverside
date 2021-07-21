import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobDto } from './job.entity';
@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobDto) private jobRepository: Repository<JobDto>,
  ) {}
  async create(job: JobDto): Promise<JobDto> {
    return this.jobRepository.save(job);
  }
  async findAll(): Promise<JobDto[]> {
    return this.jobRepository.find();
  }
  async findOne(id: number): Promise<JobDto> {
    return this.jobRepository.findOne(id);
  }
  async update(id: number, job: JobDto) {
    return this.jobRepository.update(id, job);
  }
  async deleteOne(id: number) {
    return this.jobRepository.delete(id);
  }
}
