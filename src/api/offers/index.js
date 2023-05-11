const router = require("express").Router();

const offersController = require("./offers.controller");

router.route("/").get(offersController.listOffers);
router.route("/:offerId").get(offersController.showOffer);
router.route("/").post(offersController.createOffer);
router.route("/:offerId").put(offersController.updateOffer);
router.route("/:offerId").delete(offersController.deleteOffer);

module.exports = router;
