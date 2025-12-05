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