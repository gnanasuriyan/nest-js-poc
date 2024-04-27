import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }   

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return 'This action return cat details';
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return 'This action add a new cat into list';
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
