import { Jobreport } from './jobreport.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJobreportDto } from 'src/dto/create-jobreport.dto';
import { JobreportDto } from 'src/dto/jobreport.dto';
import { Repository } from 'typeorm';
@Injectable()
export class JobreportService {
    constructor(@InjectRepository(Jobreport) private jobreportRepository:Repository<Jobreport>) {}
    async create(jobreport: CreateJobreportDto): Promise<JobreportDto> {
        return this.jobreportRepository.save(jobreport);
    }
    findOne(id: number) {
        return this.jobreportRepository.findOne(id);
    }
    findAll(): Promise<JobreportDto[]> {
        return this.jobreportRepository.find();
    }
    async update(id: number, jobreport: JobreportDto) {
       return await this.jobreportRepository.update(id, jobreport)
    }
   async delete(id: number) {
       return await this.jobreportRepository.delete(id);
    }
}
