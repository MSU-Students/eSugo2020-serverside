import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkerDto } from 'src/dto/create-worker.dto';
import { WorkerDto } from 'src/dto/worker.dto';
import { Repository } from 'typeorm';
import { Worker } from './worker.entity';
@Injectable()
export class WorkerService {
    constructor(@InjectRepository(Worker) private workerRepository:Repository<Worker>) {}
    async create(worker: CreateWorkerDto): Promise<WorkerDto> {
        return this.workerRepository.save(worker);
    }
    findOne(id: number) {
        return this.workerRepository.findOne(id);
    }
    findAll(): Promise<WorkerDto[]> {
        return this.workerRepository.find();
    }
    async update(id: number, worker: WorkerDto) {
        return await this.workerRepository.update(id, worker)
    }
   async delete(id: number) {
       return await this.workerRepository.delete(id);
    }
}
