import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDto) private userRepository: Repository<UserDto>,
  ) {}
  async create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }
  async findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  async findOne(id: number): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }
  async update(id: number, user: UserDto) {
    return this.userRepository.update(id, user);
  }
  async deleteOne(id: number) {
    return this.userRepository.delete(id);
  }
}
