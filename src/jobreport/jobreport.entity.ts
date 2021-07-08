import { ApiProperty } from "@nestjs/swagger";
import { CreateJobreportDto } from "src/dto/create-jobreport.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Jobreport implements CreateJobreportDto {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number;
        
    @ApiProperty()
    @Column({nullable: false})
    userID: number;

    @ApiProperty()
    @Column({nullable: false}) 
    jobID: number;

}
