let router = require("express").Router();
let User = require("../models/Users.model");
let isLoggedIn = require('../middleware/isLoggedIn');

//get the User
router.get("/profile", isLoggedIn, async (req, res) => {

let user = req.session.currentUser._id;

  try {
    let foundUser = await User.findById(user);
    res.render("users/profile", {foundUser});
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", async (req, res) => {
  res.render("about");
});

module.exports=router;