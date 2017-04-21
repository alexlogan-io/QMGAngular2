import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;
    
    constructor(private _productService: ProductService,
                private _routeParams: RouteParams,
                private _router: Router){}
                
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this.getProduct(id);
    }
    
    getProduct(id: number){
        this._productService.getProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
            );
    }
    
    onBack(){
        this._router.navigate(['Products']);
    }
}