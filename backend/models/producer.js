const mongoose = require("mongoose");
// const validator = require("validator");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the producer name"],
    maxLength: [30, "The name of the producer cannot exceed 30 characters"],
  },
  cif: {
    type: Number,
    required: [true, "Please enter producer cif"],
    maxLength: [9, "Producer cif cannot exceed 9 characters"],
    default: 0,
    unique: true, //! esto inidica que no habra otra propiedad igual en cualquier otro objeto
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
