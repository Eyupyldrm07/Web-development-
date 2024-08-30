import { ProductService } from "./ProductService";


let _productService=new ProdctService();

let result;
result=_productService.getById(2);

let p = new Product();


p.id=2;
p.name='iphone 6';
p.price=4000;
p.category='telefon';

_productService.saveProduct(p);
// _productService.deleteProduct(result)
result=_productService.getProducts();
console.log(result);
