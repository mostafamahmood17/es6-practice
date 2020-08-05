class phone{
    constructor(color, model, city){
        this.color = color;
        this.model = model;
        this.warehouse = city;


    }   

}

const iphone = new phone("Black", "iphone 11", "Los Angeles");
const samsung = new phone("Silver", "s20", "Dallas" );
const onePlus = new phone("Black", "0ne 8", "Miami");

console.log(onePlus);
