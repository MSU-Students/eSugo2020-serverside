import { ApiProperty } from '@nestjs/swagger';
import { IJob } from '../../interface/job.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Job implements IJob {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column({ nullable: false })
  jobtitle: string;

  @ApiProperty()
  @Column({ nullable: false })
  jobdesc: string;

  @ApiProperty()
  @Column({ nullable: true })
  location: string;

  @ApiProperty()
  @Column({ nullable: true })
  salary: number;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  dateposted: Date;

  @ApiProperty()
  @Column({ nullable: false })
  jobstatus: string;

  @ManyToOne(() => User, (user) => user.jobs, { eager: true })
  user: User;
}
