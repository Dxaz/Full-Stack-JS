// Create a factory function that generate different types of vehicles. Each
// vehicle object should have properties like type, brand, model, and year.

function createVehicle(type, brand, model, year) {
    return {
        type,
        brand,
        model,
        year,
    }
}

const hondaAccord = createVehicle("sedan", "honda", "accord", "2012")
const hondaCivic = createVehicle("sedan", "honda", "civic", "2019")
console.log(hondaAccord);
console.log(hondaCivic);