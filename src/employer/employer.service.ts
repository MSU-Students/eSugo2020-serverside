import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployerDto } from 'src/dto/create-employer.dto';
import { EmployerDto } from 'src/dto/employer.dto';
import { Repository } from 'typeorm';
import { Employer } from './employer.entity';
@Injectable()
export class EmployerService {
    constructor(@InjectRepository(Employer) private employerRepository:Repository<Employer>) {}
    async create(employer: CreateEmployerDto): Promise<EmployerDto> {
        return this.employerRepository.save(employer);
    }
    findOne(id: number) {
        return this.employerRepository.findOne(id);
    }
    async update(id: number, employer: EmployerDto) {
        await this.employerRepository.update(id, employer)
    }
   async delete(id: number) {
       await this.employerRepository.delete(id);
    }
}
