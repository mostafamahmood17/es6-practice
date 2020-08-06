class Phone{
    constructor(color, model, city){
        this.color = color;
        this.model = model;
        this.warehouse = city;

    }   

}

const iphone = new Phone("Black", "iphone 11", "Los Angeles");
const samsung = new Phone("Silver", "s20", "Dallas" );
const onePlus = new Phone("Black", "0ne 8", "Miami");

console.log(onePlus);
