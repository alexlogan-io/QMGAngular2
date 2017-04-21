import {Injectable, OnInit} from 'angular2/core'
import {Basket} from './basket'
import {IProduct} from '../products/product'

@Injectable()
export class BasketService{
    
    private _basket: Basket;
    
    ngOnInit(){
        this._basket = new Basket();
    }
    
    AddQuantity(id: number){
        this._basket.GetItemById(id).AddItem();
    }
    
    AddToBasket(product: IProduct){
        this._basket.AddToBasket(product);
    }
    
    ClearBasket(){
        this._basket.ClearBasket();
    }
    
    GetBasket(): Basket{
        return this._basket;
    }
    
    GetBasketCount(): number{
        return this._basket.GetBasketCount();
    }
    
    GetTotalPrice(){
        return this._basket.GetTotalPrice()
    }
    
    MinusQuantity(id: number){
        var res = this._basket.GetItemById(id).RemoveItem();
        if(res === 0){
            this._basket.RemoveFromBasket(id);
        }
    }
    
    RemoveFromBasket(id: number){
        this._basket.RemoveFromBasket(id);
    }
}