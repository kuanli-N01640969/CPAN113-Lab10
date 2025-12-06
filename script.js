//===Part 1 Class Setup===
class ProductProperties{
    //Initialize Properties
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //Total value method
    getTotalValue(){
        return this.price * this.quantity;
    }
    //Product representation method
    toString(){
        return `Product: ${this.name}, Price: ${this.price.toFixed(2)}, Quantitiy: ${this.quantity}`;
    }
    //===Part 3 Static Methods and Properties===
    static applyDiscount (products, discount){
        //forEach loops through all products within the array
        products.forEach(products=>{
            product.price = product.price * (1-discount);
        });
    }
}
//===Part 2 Inheritance===
class PerishableProduct extends ProductProperties {
    constructor (name, price, quantity, expirationDate){
        //calls parent properties
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString(){
        return `Product: ${this.name}, Price: ${this.price.toFixed(2)}, Quantitiy: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
//2 Instances Creations
const perish1 = new PerishableProduct("Steak", 21.99, 3, "2025-12-10");
const perish2 = new PerishableProduct("Butter", 7.99, 2, "2025-12-28");
//===Part 4 Store Management===
class Store{
    constructor(){
        this.inventory = [];
    }
    //Adding products to inventory array
    addProduct(product){
        this.inventory.push(product);
    }
    //Find product by name
    findProductByName(name){
        for (const product of this.inventory){
            if (product.name === name){
                return product;
            }
        }
        return null;
    }
}