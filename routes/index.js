let router = require("express").Router();

router.get("/", (req,res) => {
    res.render("index.hbs");
})

module.exports = router;