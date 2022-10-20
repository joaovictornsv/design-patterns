// Component Interface
export interface ProductComponent {
  getPrice(): number;
  addProduct(product: ProductComponent): void;
}

// Component
export class Product implements ProductComponent {
  constructor(
    private readonly price: number
  ) { }

  getPrice() {
    return this.price
  }

  addProduct() {}
}

// Composite
export class ProductPackage implements ProductComponent {
  private readonly products: ProductComponent[] = [];

  getPrice() {
    const total = this.products.reduce((acc, product) => acc+product.getPrice(), 0)
    return total;
  }

  addProduct(product: ProductComponent) {
    this.products.push(product);
  }
}