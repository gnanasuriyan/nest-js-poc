import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';
import { ICat } from './interface/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should insert a new cat', () => {
    const dto = new CreateCatDto()
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const cat:ICat = service.create(dto);
    expect(cat).toBeDefined();
    expect(cat.id).toBeDefined();
    expect(cat.name).toBe(dto.name);
    expect(cat.breed).toBe(dto.breed);
    expect(cat.age).toBe(dto.age);
  });

  it('should return list of all cats', () => {
    const listOfCats = service.findAll();
    expect(listOfCats.length).toBe(0);
    const dto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const cat:CatDto = service.create(dto);
    expect(cat).toBeDefined();
    expect(cat.id).toBeDefined();
    expect(cat.name).toBe(dto.name);
    expect(cat.breed).toBe(dto.breed);
    expect(cat.age).toBe(dto.age);
    const newListOfCats = service.findAll();
    expect(newListOfCats.length).toBe(1);
  });

  it('should throw error when find cat by unknown is', () => {
    expect(() => {service.findById(1)}).toThrow('Cat not found');
  });

  it('should find the cat by id', () => {
    const dto:CreateCatDto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    let cat:ICat = service.create(dto);
    expect(cat).toBeDefined();

    cat = service.findById(cat.id);
    expect(cat).toBeDefined();
    expect(cat.name).toBe(dto.name);
    expect(cat.breed).toBe(dto.breed);
    expect(cat.age).toBe(dto.age);
    
  });

  it('should throw cat not found error while updating unknown cat', () => {
    const updateDto:UpdateCatDto = new UpdateCatDto();
    updateDto.name = 'Bella updated';
    updateDto.age = 2;
    expect(() => service.update(10, updateDto)).toThrow('Cat not found');
  });

  it('should update a cat', () => {
    const dto:CreateCatDto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const cat:ICat = service.create(dto);
    expect(cat).toBeDefined();
    expect(cat.id).toBeDefined();
    expect(cat.name).toBe(dto.name);
    expect(cat.breed).toBe(dto.breed);
    expect(cat.age).toBe(dto.age);

    const updateDto:UpdateCatDto = new UpdateCatDto();
    updateDto.name = 'Bella updated';
    updateDto.age = 2;
    const updatedCat: ICat = service.update(cat.id, updateDto);
    expect(updatedCat).toBeDefined();
    expect(updatedCat.id).toBe(cat.id);
    expect(updatedCat.name).toBe(updateDto.name);
    expect(updatedCat.age).toBe(updateDto.age);
    expect(updatedCat.breed).toBe(cat.breed);
  });

  it('should throw cat not found error while deleting uknown cat', () => {
    expect(() => {service.delete(1)}).toThrow('Cat not found');
  });

  it('should delete a cat', () => {
    const dto:CreateCatDto = new CreateCatDto();
    dto.name = 'Bella';
    dto.breed = 'Persian';
    dto.age = 1;
    const cat:ICat = service.create(dto);
    expect(cat).toBeDefined();
    expect(cat.id).toBeDefined();
    expect(cat.name).toBe(dto.name);
    expect(cat.breed).toBe(dto.breed);
    expect(cat.age).toBe(dto.age);
    expect(service.delete(cat.id)).toBeTruthy();
    // try to find the same cat
    expect(() => {service.findById(cat.id)}).toThrow('Cat not found');
  });

});
