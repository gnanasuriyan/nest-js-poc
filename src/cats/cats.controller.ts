import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(): string {
        return 'This action returns all cats'
    }   

    @Get(':id')
    findOne(): string {
        return 'This action return cat details'
    }

    @Post()
    create(): string {
        return 'This action add a new cat into list'
    }

    @Put(':id')
    update(): string {
        return 'This action update an existing cat'
    }

    @Delete(':id')
    remove(): string{
        return 'This action delete an existing cat'        
    }
}
