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
}