let router = require("express").Router();
let User = require("../models/Users.model");
let isLoggedIn = require('../middleware/isLoggedIn');

//Get User from data base by ID Route
router.get("/profile", isLoggedIn, async (req, res) => {

let user = req.session.currentUser._id;

  try {
    let foundUser = await User.findById(user);
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
        res.render("users/edit-profile", {foundUser});}

      catch (error) {console.log(error);}
    });
    
    router.post("/edit-profile", isLoggedIn, async (req, res) => {
      let user = req.session.currentUser._id;

      let { firstName, lastName, age, password, nationality} = req.body;
      try {
        let pickedUser = await User.findByIdAndUpdate(user, { firstName, lastName, age, password, nationality});
        res.redirect("/profile");} 
      
      catch (error) {console.log(error);}
    });





//About Route
router.get("/about", async (req, res) => {
  res.render("about");
});

module.exports=router;