let { Schema, model } = require("mongoose");

let countrySchema = new Schema({
  flag: String,
  name: String,
  continent: String,
  population: Number,
  capital: Array,
  currency: Object,
});

module.exports = model("Country", countrySchema);
