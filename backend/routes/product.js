const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct); //! Ruta para la funcion de getSingleProduct

router.route("/product/new").post(newProduct); //! NO HARIA FALTA - CAMBIO DE RUTA EN TODO CASO - QUITAR ADMIN

router.route("/product/:id").put(updateProduct).delete(deleteProduct); //! NO HARIA FALTA - CAMBIO DE RUTA EN TODO CASO - QUITAR ADMIN

module.exports = router;
