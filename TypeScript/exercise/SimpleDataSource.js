"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, 'Samsung S5', 'Telefon', 1000), new product_1.Product(2, 'Samsung S6', 'Telefon', 2000), new product_1.Product(3, 'Samsung S7', 'Telefon', 3000), new product_1.Product(4, 'Samsung S8', 'Telefon', 4000));
    }
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
getProducs();
product_1.Product[];
{
    return this.products;
}
