System.register(['./basketItem'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var basketItem_1;
    var Basket;
    return {
        setters:[
            function (basketItem_1_1) {
                basketItem_1 = basketItem_1_1;
            }],
        execute: function() {
            Basket = (function () {
                function Basket() {
                    this.basketCount = 0;
                    this.basket = null;
                }
                Basket.prototype.ClearBasket = function () {
                    this.basket = null;
                    this.basketCount = 0;
                };
                Basket.prototype.GetTotalPrice = function () {
                    //TODO function to sum basket
                };
                Basket.prototype.AddToBasket = function (product) {
                    if (this.basket.containsKey(product.id.toString())) {
                        var basketItem = this.basket.getValue(product.id.toString());
                        basketItem.AddItem();
                        this.basket.changeValueAtKey(product.id.toString(), basketItem);
                    }
                    else {
                        var basketItem = new basketItem_1.BasketItem();
                        basketItem.AddProduct(product);
                        this.basket.add(product.id.toString(), basketItem);
                    }
                };
                Basket.prototype.RemoveFromBasket = function (id) {
                    this.basket.remove(id.toString());
                };
                Basket.prototype.GetBasketCount = function () {
                    return this.basket.keys.length;
                };
                Basket.prototype.GetItemById = function (id) {
                    return this.basket.getValue(id.toString());
                };
                return Basket;
            }());
            exports_1("Basket", Basket);
        }
    }
});
//# sourceMappingURL=basket.js.map