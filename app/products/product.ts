export interface IProduct{
    id: number;
    Name: string;
    Category: string;
    Description: string;
    ImgUrl: string;
    Price: number;
}

export class Product{
    id: number;
    Name: string;
    Category: string;
    Description: string;
    ImgUrl: string;
    Price: number;
    
    constructor(id: number, name: string, category: string, description: string,
                imgUrl: string, price: number){
        this.id = id;
        this.Name = name;
        this.Category = category;
        this.Description = description;
        this.ImgUrl = imgUrl;
        this.Price = price;
    }
}