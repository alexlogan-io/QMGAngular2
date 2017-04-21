System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasketItem;
    return {
        setters:[],
        execute: function() {
            BasketItem = (function () {
                function BasketItem() {
                }
                BasketItem.prototype.AddProduct = function (product) {
                    this.product = product;
                    this.quantity = 1;
                    this.totalPrice = product.Price;
                };
                BasketItem.prototype.AddItem = function () {
                    this.totalPrice += this.product.Price;
                    this.quantity++;
                };
                BasketItem.prototype.RemoveItem = function () {
                    this.totalPrice -= this.product.Price;
                    this.quantity--;
                    return this.quantity;
                };
                return BasketItem;
            }());
            exports_1("BasketItem", BasketItem);
        }
    }
});
//# sourceMappingURL=basketItem.js.map