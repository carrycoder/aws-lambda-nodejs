const express = require("express"); 
const {getReviews} = require("../controllers/reviews");
const router = express.Router(); 

router.route("/").get(getReviews); 

module.exports = router;