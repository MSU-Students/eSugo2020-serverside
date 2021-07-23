import { ApiProperty } from '@nestjs/swagger';
import { IJob } from 'src/interface/job.interface';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserDto } from 'src/esugo-module/user/user.entity';
import { ApplicationDto } from '../application/application.entity';

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
  salary: string;

  @ApiProperty()
  @Column({ type: 'date' })
  datePosted?: Date;

  @ApiProperty({ example: 'pending'})
  @Column({ length: 100 })
  status: 'pending' | 'approved' | 'disapproved' | 'taken' | 'done' | 'canceled';

  @ApiProperty({ example: 'carpentry.jpg' })
  @Column({ length: 100 })
  coverPhoto: string;

  @ApiProperty({ example: 1 })
  @Column()
  employerID: number;

  @ManyToOne(() => UserDto, (user) => user.jobs, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: "employerID" })
  user?: UserDto;

  @OneToMany(() => ApplicationDto, (application) => application.job)
  applications?: ApplicationDto[];
}
