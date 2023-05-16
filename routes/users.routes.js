let router = require("express").Router();
let User = require("../models/Users.model");

//get the User
router.get("/user/userId", async (req, res) => {

let {userId} = req.params;
let{username,nationality,visitedCountires} = req.body

  try {
    let findUser = await User.findById( userId);
    res.render("users/profile.hbs", {useranme});
  } catch (error) {
    console.log(error);
  }
});

module.exports=router;