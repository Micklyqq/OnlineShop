const Router = require("express");
const router = new Router();
const ratingController = require("../controllers/ratingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/rate", authMiddleware, ratingController.addRating);
router.get("/getrate", ratingController.getRating);
router.get("/getavgrate", ratingController.getAverageRate);

module.exports = router;
