import { Test, TestingModule } from '@nestjs/testing';
import { JobworkerController } from './jobworker.controller';

describe('JobworkerController', () => {
  let controller: JobworkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobworkerController],
    }).compile();

    controller = module.get<JobworkerController>(JobworkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
