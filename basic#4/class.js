class CarModel {
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Car is started");
    }

    stop(){
        console.log("Car is stoped");
    }

}

let car1 = new CarModel("Toyota", 10);// constructor
let car2 = new CarModel();
console.log(car1);
console.log(car2); // undefined
