import { Test, TestingModule } from '@nestjs/testing';
import { JobreportController } from './jobreport.controller';

describe('JobreportController', () => {
  let controller: JobreportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobreportController],
    }).compile();

    controller = module.get<JobreportController>(JobreportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
