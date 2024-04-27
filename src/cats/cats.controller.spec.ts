import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';
import { ListCatDto } from './dto/list-cat.dto';
import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
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
    const dto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const result: CatDto = controller.create(dto);
    expect(result.id).toBeDefined();

    const updateDto = new UpdateCatDto();
    updateDto.name = 'milo';
    updateDto.age = 2;
    const updatedCat = controller.update(result.id, updateDto);
    expect(updatedCat).toBeDefined();
    expect(updatedCat.name).toBe(updateDto.name);
    expect(updatedCat.age).toBe(updateDto.age);
  });

  it('it should delete an existing cat', () => {
    const dto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const result: CatDto = controller.create(dto);
    expect(result.id).toBeDefined();
    expect(controller.remove(result.id)).toBeTruthy();
  });

  it('it should return cat details', () => {
    const dto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const result: CatDto = controller.create(dto);
    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
    const catResultById = controller.findOne(result.id);
    expect(catResultById).toBeDefined();
    expect(catResultById.name).toBe(dto.name);
    expect(catResultById.age).toBe(dto.age);
  });
  
});
