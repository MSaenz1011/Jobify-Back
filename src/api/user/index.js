const router = require("express").Router();
const userController = require("./user.controller");

router.route("/signup").post(userController.signUp);
router.route("/signin").post(userController.signIn);
router.route("/").get(userController.getUsers);
router.route("/:userId").get(userController.showUser);
router.route("/:userId").put(userController.updateUser);
router.route("/").post(userController.createUser);

module.exports = router;
