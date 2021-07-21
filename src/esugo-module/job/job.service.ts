import { Job } from './job.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {}
  async create(job: Job): Promise<Job> {
    return this.jobRepository.save(job);
  }
  findOne(id: number) {
    return this.jobRepository.findOne(id);
  }
  findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }
  async update(id: number, job: Job) {
    await this.jobRepository.update(id, job);
  }
  async delete(id: number) {
    await this.jobRepository.delete(id);
  }
}
