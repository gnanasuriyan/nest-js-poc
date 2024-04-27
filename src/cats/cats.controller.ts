import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';
import { ListCatDto } from './dto/list-cat.dto';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(): ListCatDto {
        const catList = new ListCatDto()
        catList.list = [];
        catList.total = 0;
        return catList;
    }   

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return 'This action return cat details';
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): CatDto {
        const newCat = new CatDto();
        newCat.id = 1;
        newCat.name = createCatDto.name;
        newCat.breed = createCatDto.breed;
        newCat.age = createCatDto.age;
        return newCat;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): string {
        return 'This action update an existing cat';
    }

    @Delete(':id')
    remove(@Param('id') id: number): string{
        return 'This action delete an existing cat';
    }
}
