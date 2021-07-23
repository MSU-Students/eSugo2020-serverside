import { JobDto } from '../job';
import { IApplication } from '../../interface/application.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDto } from '../user';

@Entity('Application')
export class ApplicationDto implements IApplication {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  status: string;

  @ApiProperty({ example: 1 })
  @Column()
  workerID: number;

  @ApiProperty({ example: 1 })
  @Column()
  jobID: number;

  @ManyToOne(() => UserDto, (user) => user.applications, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'workerID' })
  user?: UserDto;

  @ManyToOne(() => JobDto, (job) => job.applications, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'jobID' })
  job?: JobDto;
}
