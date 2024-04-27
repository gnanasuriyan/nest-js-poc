import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';
import { ListCatDto } from './dto/list-cat.dto';
import { CatDto } from './dto/cat.dto';

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

  it('it should return all cats', () => {
    const catList: ListCatDto = controller.findAll();
    expect(catList.total).toBe(0);
    expect(catList.list.length).toBe(0);
  });

  it('it should add a new cat', () => {
    const dto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const result: CatDto = controller.create(dto);
    expect(result.id).toBeDefined();
    expect(result.name).toBe(dto.name);
    expect(result.breed).toBe(dto.breed);
    expect(result.age).toBe(dto.age);
  });

  it('it should update an existing cat', () => {
    const dto = new UpdateCatDto();
    dto.name = 'milo';
    dto.age = 2;
    expect(controller.update(1, dto)).toBe('This action update an existing cat');
  });

  it('it should delete an existing cat', () => {
    expect(controller.remove(1)).toBe('This action delete an existing cat');
  });

  it('it should return cat details', () => {
    expect(controller.findOne(1)).toBe('This action return cat details');
  });
  
});
