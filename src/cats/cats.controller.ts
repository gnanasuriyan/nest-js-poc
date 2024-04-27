import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';
import { ListCatDto } from './dto/list-cat.dto';
import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';
import { ICat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private catService: CatsService) {

    }

    @Get()
    findAll(): ListCatDto {
        return this.catService.findAll();
    }   

    @Get(':id')
    findOne(@Param('id') id: number): ICat {
        return this.catService.findById(id)
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): CatDto {
        return this.catService.create(createCatDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): ICat {
        return this.catService.update(id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): boolean{
        return this.catService.delete(id);
    }
}
