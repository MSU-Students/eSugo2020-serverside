import { Test, TestingModule } from '@nestjs/testing';
import { JobworkerService } from './jobworker.service';

describe('JobworkerService', () => {
  let service: JobworkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobworkerService],
    }).compile();

    service = module.get<JobworkerService>(JobworkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
