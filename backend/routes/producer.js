const express = require("express");
const router = express.Router();

const {
  getProducers,
  newProducer,
  getSingleProducer,
  updateProducer,
  deleteProducer,
} = require("../controllers/producerController");

router.route("/producers").get(getProducers);
router.route("/producer/:id").get(getSingleProducer);

router.route("/producer/new").post(newProducer);

router.route("/producer/:id").put(updateProducer).delete(deleteProducer);

module.exports = router;
