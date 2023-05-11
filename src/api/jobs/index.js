const router = require("express").Router();

const jobController = require("./jobs.controller");

router.route("/").get(jobController.listJob);
router.route("/:jobId").get(jobController.showJob);
router.route("/").post(jobController.createJob);
router.route("/:jobId").put(jobController.updateJob);
router.route("/:jobId").delete(jobController.deleteJob);

module.exports = router;
