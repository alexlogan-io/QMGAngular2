import {Component, OnInit} from 'angular2/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector:'qmg-products',
    templateUrl: 'app/products/product-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    
    products: IProduct[] = [];
    
    constructor(private _productService: ProductService){}
    
    toggleImage(){
        this.showImage = !this.showImage;
    }
    
    ngOnInit(){
        this._productService.getProductRange(6,12)
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }
    
    addToBasket(i: number){
        console.log("Added " + this.products[i].Name + "to basket");
    }
}