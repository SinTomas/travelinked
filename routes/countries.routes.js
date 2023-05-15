let router = require("express").Router();
let Country = require("../models/country.Model");
const axios = require("axios");

//Get all Countries

router.get("/countries", async (req, res) => {
  const apiCall = await axios.get("https://restcountries.com/v3.1/all");
  console.log("path to currency", apiCall.data[0].currencies);
  res.render("countries/all-countries", { countries: apiCall.data, currency: apiCall.data[0].currencies });
});

router.get("/countries/create", async (req, res) => {
  res.render("countries/add-country");
});

module.exports = router;
