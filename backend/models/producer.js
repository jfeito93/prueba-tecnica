const mongoose = require("mongoose");
// const validator = require("validator");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the producer name"],
    maxLength: [30, "The name of the producer cannot exceed 30 characters"],
  },
  cif: {
    type: String,
    required: [true, "Please enter the producer cif"],
    maxLength: [9, "The cif of the producer cannot exceed 9 characters"],
  },
  direction: {
    type: String,
    required: [true, "Please enter the producer direction"],
    maxLength: [
      100,
      "The direction of the producer cannot exceed 100 characters",
    ],
  },
});

module.exports = mongoose.model("Producer", producerSchema);
