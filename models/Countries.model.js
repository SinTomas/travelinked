let {Schema, model} = require('mongoose');

let countrySchema = new Schema ({
    flag: String,
    name: String,
    continent: String,
    population: Number,
    capital: String,
    currency: String,
    currencySymbol: String
})

module.exports = model('Country', countrySchema);