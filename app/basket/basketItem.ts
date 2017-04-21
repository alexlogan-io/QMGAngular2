import {IProduct} from '../products/product'

export interface IBasketItem{
    product: IProduct;
    quantity: number;
    totalPrice: number;
    AddProduct(product: IProduct);
    AddItem();
    RemoveItem();
}

export class BasketItem {
    product: IProduct;
    quantity: number;
    totalPrice: number;
    
    AddProduct(product: IProduct){
        this.product = product;
        this.quantity = 1;
        this.totalPrice = product.Price;
    }
    
    AddItem(){
        this.totalPrice += this.product.Price;
        this.quantity ++;
    }
    
    RemoveItem(){
        this.totalPrice -= this.product.Price;
        this.quantity --;
        return this.quantity;
    }   
}