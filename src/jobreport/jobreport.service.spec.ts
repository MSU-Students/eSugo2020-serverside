import { Test, TestingModule } from '@nestjs/testing';
import { JobreportService } from './jobreport.service';

describe('JobreportService', () => {
  let service: JobreportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobreportService],
    }).compile();

    service = module.get<JobreportService>(JobreportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
