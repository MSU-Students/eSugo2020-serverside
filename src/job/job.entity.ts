import { ApiProperty } from "@nestjs/swagger";
import { CreateJobDto } from "src/dto/create-job.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Job implements CreateJobDto {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    jobID: number;
        
    @ApiProperty()
    @Column({nullable: false})
    employerID: number;

    @ApiProperty()
    @Column({nullable: false}) 
    jobtitle: string;

    @ApiProperty()
    @Column({nullable: false}) 
    jobdesc: string;
    
    @ApiProperty()
    @Column({nullable: true}) 
    location: string;

    @ApiProperty()
    @Column({nullable: true}) 
    salary: number;
    
    @ApiProperty()
    @Column({nullable: false}) 
    dateposted: string;

    @ApiProperty()
    @Column({nullable: false}) 
    jobstatus: string;
}
