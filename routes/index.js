let router = require("express").Router();

router.get("/", (req,res) => {
    res.render("index.hbs");
})


router.get("/about", async (req, res) => {res.render("about");});

module.exports = router;