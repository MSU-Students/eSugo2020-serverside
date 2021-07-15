import { ApiProperty } from "@nestjs/swagger";
import { CreateWorkerDto } from "src/dto/create-worker.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Worker implements CreateWorkerDto {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number;

    @ApiProperty()
    @Column({nullable: false})
     workerID: number;

     @ApiProperty()
     @Column({length: 35, nullable: false}) 
     aboutme: string;
    
    
}
