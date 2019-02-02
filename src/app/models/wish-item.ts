export class WishItem {
    category: string;
    createdDate: Date;
    name: string;
    pictureUrl: string;
    price: number;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}