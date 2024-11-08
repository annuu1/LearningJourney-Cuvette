class Product {
    constructor(productId, name, price, quantityInStock) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantityInStock = quantityInStock;
    }
    restock(qty){
        this.quantityInStock += qty
        console.log(`The product has been restocked. New quantity ${this.quantityInStock}.`);
    }
    sell(qty){
        if(qty<this.quantityInStock){
            this.quantityInStock -= qty
            console.log(`The product has been sold. New quantity ${this.quantityInStock}.`);
            }else{
                console.log("Not enough quantity in stock to sell.")
            }
    }
}

class Inventory {
    constructor() {
        this.products=[]
    }
    addProduct(product){
        this.products.push(product);
        console.log(`The product has been added to the inventory.  Product name: ${product.name}`);
    }
}


let product1 = new Product(12,"Mobile", 12000, 40)

let myInventory = new  Inventory();
myInventory.addProduct(product1);
product1.restock(20);
product1.sell(10);
product1.sell(50);
