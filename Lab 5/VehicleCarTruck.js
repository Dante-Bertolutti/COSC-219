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
}
