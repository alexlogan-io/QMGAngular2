System.register(['angular2/core', './basket'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, basket_1;
    var BasketService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (basket_1_1) {
                basket_1 = basket_1_1;
            }],
        execute: function() {
            BasketService = (function () {
                function BasketService() {
                }
                BasketService.prototype.ngOnInit = function () {
                    this._basket = new basket_1.Basket();
                };
                BasketService.prototype.AddQuantity = function (id) {
                    this._basket.GetItemById(id).AddItem();
                };
                BasketService.prototype.AddToBasket = function (product) {
                    this._basket.AddToBasket(product);
                };
                BasketService.prototype.ClearBasket = function () {
                    this._basket.ClearBasket();
                };
                BasketService.prototype.GetBasket = function () {
                    return this._basket;
                };
                BasketService.prototype.GetBasketCount = function () {
                    return this._basket.GetBasketCount();
                };
                BasketService.prototype.GetTotalPrice = function () {
                    return this._basket.GetTotalPrice();
                };
                BasketService.prototype.MinusQuantity = function (id) {
                    var res = this._basket.GetItemById(id).RemoveItem();
                    if (res === 0) {
                        this._basket.RemoveFromBasket(id);
                    }
                };
                BasketService.prototype.RemoveFromBasket = function (id) {
                    this._basket.RemoveFromBasket(id);
                };
                BasketService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BasketService);
                return BasketService;
            }());
            exports_1("BasketService", BasketService);
        }
    }
});
//# sourceMappingURL=basket.service.js.map