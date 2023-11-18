const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/openbasket", authMiddleware, basketController.openBasket);
router.post("/addtobasket", authMiddleware, basketController.addtobasket);
router.post("/delfrombasket", authMiddleware, basketController.delfrombasket);

module.exports = router;
