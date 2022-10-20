// Client
import { Product, ProductPackage } from './product';

const product = new Product(1)
const product2 = new Product(3)
const productPackage = new ProductPackage()

productPackage.addProduct(new Product(5))
productPackage.addProduct(new Product(2))
productPackage.addProduct(new Product(3))

console.log(`product = R$ ${product.getPrice()},00`);
console.log(`product2 = R$ ${product2.getPrice()},00`);
console.log(`productPackage = R$ ${productPackage.getPrice()},00`);
