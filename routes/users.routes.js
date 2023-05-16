let router = require("express").Router();
let User = require("../models/Users.model");

//get the User
router.get("/user/userId", async (req, res) => {

let {userId} = req.params;

console.log(userId);
/* let{username,nationality,visitedCountires} = req.body */


  try {
    let findUser = await User.findById(userId);
    res.render("users/profiles.hbs", {useranme});
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", async (req, res) => {
  res.render("about");
});

module.exports=router;