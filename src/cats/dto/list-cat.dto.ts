import { CatDto } from "./cat.dto";

export class ListCatDto {
    total: number;
    list: Array<CatDto>;
}
