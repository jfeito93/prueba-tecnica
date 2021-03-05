const Product = require("../models/product");

const APIFeatures = require("../utils/apiFeatures"); //! Llamada a apiFeatures

// Create new product => /api/v1/admin/product/new
exports.newProduct = async (req, res, next) => {
  
  //!NO RESUELTO - RELACION TABLAS
  //!req.body.producer = req.producer.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

//* Get all products => /api/v1/products?keyword=apple
exports.getProducts = async (req, res, next) => {
  //! CUANTOS PRODUCTOS ENSEÑAR POR PAGINA
  const resPerPage = 10;
  const productCount = await Product.countDocuments();

  //! apiFeatures - aqui le indicamos que busque por keyword
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  //! FUNCION ASINCRONA - sin apifeatures
  //const products = await Product.find();

  const products = await apiFeatures.query; //* ?keyword=apple

  //! Esto nos traerá todos los productos de la coleccion de la base de datos
  res.status(200).json({
    success: true,
    count: products.length,
    productCount,
    products,
    //message: "this route will show all products in database.",
  });
};

// Get single product details => /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    //! CON EL USO DE ERROR HANDLER
    //return next(new ErrorHandler("Product not found", 404));

    //! SIN EL USO DE ERROR HANDLER - SEGURAMENTE HABRA QUE VOLVER A ESTE CODIGO
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// Update Product => /api/v1/admin/product/:id
//! ESTA FUNCION NO VA A HACER FALTA
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// Delete product => /api/v1/admin/product/:id
//! NO HARIA FALTA
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
};
