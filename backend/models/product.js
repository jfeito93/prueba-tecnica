const mongoose = require("mongoose");
//!const Producer = require("../models/producer");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  ratings: {
    type: Number,
    default: 0.0,
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0.0,
  },

  //! ESTO SI METES IMAGEN AL FINAL COMO PROPIEDAD DE PRODUCT
  /*   images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ], */

  producer: [
    {
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
    },
  ],
  //!NO RESUELTO - RELACION TABLAS
  /*     producer: {
    type: mongoose.Schema.ObjectId,
    ref: "Producer",
    required: false, 
  }, */
  //!intentos
  /* required: false,  */
  /* const Producer = mongoose.model('Producer', ProducerSchema); */
});
//!module.exports = Producer;
module.exports = mongoose.model("product", productSchema);
