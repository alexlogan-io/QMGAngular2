import {BasketItem} from './basketItem'
import {Dictionary} from '../shared/dictionary'
import {IDictionary} from '../shared/dictionary'
import {IProduct} from '../products/product'

export class Basket{
    basket: IDictionary;
    basketCount: number;
    
    constructor(){
        this.basketCount = 0;
        this.basket = null;
    }
    
    ClearBasket(){
        this.basket = null;
        this.basketCount = 0;
    }
    
    GetTotalPrice(){
        //TODO function to sum basket
    }
    
    AddToBasket(product:IProduct){
        if(this.basket.containsKey(product.id.toString())){
            var basketItem: BasketItem = this.basket.getValue(product.id.toString())
            basketItem.AddItem();
            this.basket.changeValueAtKey(product.id.toString(),basketItem)
        }else{
            var basketItem: BasketItem = new BasketItem();
            basketItem.AddProduct(product);
            this.basket.add(product.id.toString(),basketItem);
        }
    }
    
    RemoveFromBasket(id: number){
        this.basket.remove(id.toString());
    }
    
    GetBasketCount(){
        return this.basket.keys.length;
    }
    
    GetItemById(id: number): BasketItem{
        return this.basket.getValue(id.toString());
    }
}