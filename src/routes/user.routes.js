const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController");

router.get("/", UserController.index);

router.post("/create", UserController.create);

module.exports = router;
