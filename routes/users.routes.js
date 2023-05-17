let router = require("express").Router();
let User = require("../models/Users.model");
let isLoggedIn = require('../middleware/isLoggedIn');
let Country = require("../models/Countries.model");
let axios = require("axios");



//Get User from data base by ID Route
router.get("/profile", isLoggedIn, async (req, res) => {

let user = req.session.currentUser._id;

  try {
    let foundUser = await User.findById(user).populate('visitedCountries');
    console.log(foundUser)
    res.render("users/profile", {foundUser});
  } catch (error) {
    console.log(error);
  }
});



//Edit Profile Route
router.get("/edit-profile", isLoggedIn, async (req, res) => {

    let user = req.session.currentUser._id;
    
      try {
        let foundUser = await User.findById(user);
        let countries = await Country.find();
        res.render("users/edit-profile", {foundUser, countries});
        console.log(countries);
      }
      catch (error) {console.log(error);
      }
  });
    
router.post("/edit-profile", isLoggedIn, async (req, res) => {
    let user = req.session.currentUser._id;

    let { firstName, lastName, age, nationality} = req.body;
      try {
        let pickedUser = await User.findByIdAndUpdate(user, { firstName, lastName, age, nationality});
        res.redirect("/profile");
      }
      catch (error) {console.log(error);}
  });



//About Route
router.get("/about", async (req, res) => {
  res.render("about");
});



//Add a Visited Country to the Profile Page Route
router.get("/add-visited", isLoggedIn, async (req, res) => {

  let user = req.session.currentUser._id;
  
    try {
      let foundUser = await User.findById(user);
      let countriesList = await Country.find();
      res.render("users/add-visited", {foundUser,countriesList});}


    catch (error) {console.log(error);}
});



router.post("/add-visited", isLoggedIn, async (req, res) => {
let user = req.session.currentUser._id;

let { visitedCountries} = req.body;

try {
  await User.findByIdAndUpdate(user, {$push: {visitedCountries: visitedCountries}});
  res.redirect("/profile");} 

catch (error) {console.log(error);}
});



//Delete Visited  Country Route
router.post("/remove-visited/:id", isLoggedIn, async (req, res) => {
  const {id} = req.params
let user = req.session.currentUser._id;
try {
  await User.findByIdAndUpdate(user, {$pull: {visitedCountries: id}});
  res.redirect("/profile");} 

catch (error) {console.log(error);
  }
});



//Edit Visited Countries Route
router.get("/edit-visited", isLoggedIn, async (req, res) => {

  let user = req.session.currentUser._id;
  
    try {
      let foundUser = await User.findById(user);
      let countries = await Country.find();
      res.render("users/edit-profile", {foundUser, countries});
      console.log(countries);
    }
    catch (error) {console.log(error);
    }
});
  
router.post("/edit-visited", isLoggedIn, async (req, res) => {
  let user = req.session.currentUser._id;
  
  let { visitedCountries} = req.body;
  
  try {
    await User.findByIdAndUpdate(user, {$push: {visitedCountries: visitedCountries}});
    res.redirect("/profile");} 
  
  catch (error) {console.log(error);}
  });



module.exports=router;