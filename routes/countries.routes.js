let router = require("express").Router();
let Country = require("../models/country.Model");
let axios = require("axios");

//Get all Countries

router.get("/countries", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
  console.log("path to currency", apiCall.data[0].currencies);
  res.render("countries/all-countries", {countries: apiCall.data});
});

router.get("/countries/create", async (req, res) => {
  res.render("countries/add-country");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/europe", async (req, res) => {
  let apiCall = await axios.get("https://restcountries.com/v3.1/all");
console.log(apiCall.data)
  res.render("countries/europe", {countries: apiCall.data});
})

module.exports = router;