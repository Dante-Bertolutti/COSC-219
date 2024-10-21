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
