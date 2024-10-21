class Vehicle {
    constructor(make, model, year, mileage, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
    }

    getVehicleInfo() {
        return `${this.model}, ${this.make}, ${this.year}, ${this.mileage} km, Cost: $${this.price}`;
    }

    drive(km){
        this.mileage += km;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, mileage, price, fuelType) {
        super(make, model, year, mileage, price);
        this.fuelType = fuelType; 
    }
    getCarInfo() {
        return `${this.make} ${this.model} (${this.year}), ${this.mileage} KM, Cost: $${this.price}, Fuel: ${this.fuelType}`;
    }
    applyDiscount(discount) {
            this.price -= this.price * discount;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, mileage, price, cargoCapacity) {
        super(make, model, year, mileage, price);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
    }

    getTruckInfo() {
        return `${this.make} ${this.model} (${this.year}), ${this.mileage} KM, Cost: $${this.price}, Cargo: ${this.currentCargo} kilograms`;
    }

    loadCargo(kg) {
        if (this.currentCargo + kg <= this.cargoCapacity) {
            this.currentCargo += kg;
            console.log(`${kg} loaded`);
        } else {
            console.log(`Max Capacity`);
        }
    }
}

function testVehicle() {
    const car1 = new Car("Toyota", "Subaru", 2015, 10000, 20000, "gasoline");
    const truck1 = new Truck("Ford", "Ranger", 2019, 80000, 40000, 10000);

    car1.drive(2000);
    car1.applyDiscount(0.30);
    console.log(car1.getCarInfo());

    truck1.drive(10000);
    truck1.loadCargo(8000);
    console.log(truck1.getTruckInfo());
    truck1.loadCargo(3000);
}

testVehicle();