import { ApiProperty } from "@nestjs/swagger";
import { CreateJobworkerDto } from "src/dto/create-jobworker.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Jobworker implements CreateJobworkerDto {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    jobworkerID: number;
        
    @ApiProperty()
    @Column({nullable: false})
    jobID: number;

    @ApiProperty()
    @Column({nullable: false}) 
    workerID: number;

    @ApiProperty()
    @Column({nullable: false}) 
    jobworkerstatus: string;
}
