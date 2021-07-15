import { ApiProperty } from '@nestjs/swagger';
import { IWorker } from '../interface/worker.interface';
export class WorkerDto implements IWorker {

  @ApiProperty()
  id: number;

  @ApiProperty()
  workerID: number;

  @ApiProperty()
  aboutme: string;
  
}
