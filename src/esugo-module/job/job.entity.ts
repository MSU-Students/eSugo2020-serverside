import { ApiProperty } from '@nestjs/swagger';
import { IJob } from 'src/interface/job.interface';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserDto } from '../user';

@Entity('Job')
export class JobDto implements IJob {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Carpentry' })
  @Column({ length: 100 })
  title: string;

  @ApiProperty({ example: 'Make a 5 feet tall cabinet with 2 doors' })
  @Column({ length: 100 })
  description?: string;

  @ApiProperty({ example: 'MSU Main, Marawi City' })
  @Column({ length: 100 })
  location: string;

  @ApiProperty({ example: 5000 })
  @Column()
  salary: number;

  @ApiProperty()
  @Column({ type: 'date' })
  datePosted: Date;

  @ApiProperty({ example: 'pending' })
  @Column({ length: 100 })
  status: 'pending' | 'approved' | 'disapproved' | 'taken' | 'done' | 'canceled';

  @ApiProperty({ example: 1 })
  @Column()
  userId: number;

  @ManyToOne(() => UserDto, (user) => user.jobs, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: "userId" })
  user: UserDto;
}
