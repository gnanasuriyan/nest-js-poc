import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root', () => {
    it('it should return all cats', () => {
      expect(controller.findAll()).toBe('This action returns all cats');
    });

    it('it should add a new cat', () => {
      expect(controller.create()).toBe('This action add a new cat into list');
    });

    it('it should update an existing cat', () => {
      expect(controller.update()).toBe('This action update an existing cat');
    });

    it('it should delete an existing cat', () => {
      expect(controller.remove()).toBe('This action delete an existing cat')
    });

    it('it should return cat details', () => {
      expect(controller.findOne()).toBe('This action return cat details')
    });
    
  });
});
