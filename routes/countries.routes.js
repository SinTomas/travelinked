let router = require("express").Router();
let country = require("../models/Countries.model");
let axios = require("axios");

//Get all Countries in the world

router.get("/countries", async (req, res) => {
  const apiCall = await axios.get("https://restcountries.com/v3.1/all");
  await Country.create({
    flag: flags.png,
    name: name.common,
    continent: continents,
    population,
    capital,
    currency: currencies[0].name,
    currencySymbol: currencies[0].symbol,
  });
  res.render("countries/all-countries", { countries: apiCall.data });
});

//Get all Countries in Europe
router.get("/countries/europe", async (req, res) => {
  const apiCall = await axios.get("https://restcountries.com/v3.1/all");
  let allCountries = apiCall.data;
  /* console.log(allCountries[3].continents[0]); */
  let europe = [];

  for (let i = 0; i < allCountries.length; i++) {
    if (allCountries[i].continents[0] === "Europe") {
      europe.push(allCountries[i]);
    }
  }
  console.log(europe);

  res.render("countries/europe", { europe });
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