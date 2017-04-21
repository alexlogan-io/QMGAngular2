System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(id, name, category, description, imgUrl, price) {
                    this.id = id;
                    this.Name = name;
                    this.Category = category;
                    this.Description = description;
                    this.ImgUrl = imgUrl;
                    this.Price = price;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map