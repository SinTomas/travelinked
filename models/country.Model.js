let {Schema, model} = require('mongoose');

let countrySchema = new Schema ({
    name: String,
    rating: Number,
    cities: Array,
    funFacts: String,
    description: String,
})

module.exports = model('Country', countrySchema);