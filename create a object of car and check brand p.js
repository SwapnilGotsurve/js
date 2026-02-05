// create a object of car and check brand property is exist or not 

car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Red",
}

if ("brand" in car) {
    console.log("Brand: " + car.brand);
} else {
    console.log("Brand property does not exist in the car object.");
}