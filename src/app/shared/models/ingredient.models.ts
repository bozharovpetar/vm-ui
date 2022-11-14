export class AddIngredientDto {
    public id: string = "";
    public quantity: number = 0;

    constructor(Id:string, Quantity: number) {
        this.id = Id;
        this.quantity = Quantity;
    }
}

export class IngredientDto {
    public id: string = "";
    public title: string = "";
    public leftInStock: number = 0;
    public price: number = 0;
    public measurementUnit: string = "";
}