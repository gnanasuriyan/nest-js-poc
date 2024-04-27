import { Injectable } from '@nestjs/common';
import { ICat } from './interface/cat.interface';
import { CatDto } from './dto/cat.dto';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cate.dto';

@Injectable()
export class CatsService {
    private readonly cats: Array<ICat> = [];
    private runningNo = 0;

    public create(catDto: CreateCatDto): CatDto {
        const newCat = new CatDto();
        this.runningNo += 1;
        newCat.id = this.runningNo;
        newCat.name = catDto.name;
        newCat.breed = catDto.breed;
        newCat.age = catDto.age;
        this.cats.push(newCat);
        return newCat;
    }

    public findAll(): Array<ICat> {
        return this.cats;
    }

    public findById(id: number): ICat {
        const index = this.findCatIndexById(id);
        if (index === -1) {
            throw new Error('Cat not found');
        }
        return this.cats[index];
    }

    public update(id: number, updateDto: UpdateCatDto): CatDto {
        const index = this.findCatIndexById(id);
        if (index === -1) {
            throw new Error('Cat not found');
        }
        const cat = this.cats[index];
        if (updateDto.name) {
            cat.name = updateDto.name;
        }
        if (updateDto.age) {
            cat.age = updateDto.age;
        }
        return cat;
    }

    public delete(id: number): boolean {
        const index = this.findCatIndexById(id);
        if (index === -1) {
            throw new Error('Cat not found');
        }
        this.cats.splice(index, 1);
        return true;
    }

    private findCatIndexById(id: number): number {
        // find the cat
        let index: number = -1;
        this.cats.forEach((cat, i) => {
            if (cat.id === id) {
                index = i;
                return true;
            }
        });
        return index;
    }

}
