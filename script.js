class ProductProperties{
    //Initialize Properties
    constructor (name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //Total value method
    getTotalValue (){
        return this.price * this.quantity;
    }
    //Product representation method
    toString (){
        return `Product: ${this.name}, Price: ${this.price.toFixed(2)}, Quantitiy: ${this.quantity}`;
    }
}