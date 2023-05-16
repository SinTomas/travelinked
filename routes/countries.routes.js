let router = require("express").Router();
let Country = require("../models/Countries.model");
let axios = require("axios");

//Get all Countries in the world

router.get("/countries", async (req, res) => {
  const apiCall = await axios.get("https://restcountries.com/v3.1/all");
  const countryData = apiCall.data;

  for (const countryInfo of countryData) {
    const country = new Country({
      flag: countryInfo.flags.png,
      name: countryInfo.name.common,
      continent: countryInfo.continents[0],
      population: countryInfo.population,
      capital: countryInfo.capital,
    });

    // Save the country instance to the database
    await country.save();
  }

  res.render("countries/all-countries", { countries: countryData });
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

module.exports = router;
