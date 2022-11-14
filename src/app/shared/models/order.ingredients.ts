import { IngredientDto } from "./ingredient.models";

export class OrderDto {
    public id: string = "";
    public date: Date = new Date();
    public price: number = 0;
    public ingredients: IngredientDto[] = [];
}