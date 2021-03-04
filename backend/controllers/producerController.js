const Producer = require("../models/producer");

const APIFeatures = require("../utils/apiFeatures"); //! Llamada a apiFeatures


//const ErrorHandler = require("../utils/errorHandler"); //! no
//const catchAsyncErrors = require("../middlewares/catchAsyncErrors"); //! no

// Create new producer = > /api/v1/producer/new

//! manera 1 de hacerlo
exports.newProducer = async (req, res, next) => {
  const producer = await Producer.create(req.body);
  res.status(201).json({
    success: true,
    producer,
  });
};

//! manera 2 de hacerlo
/* exports.newProducer = async (req, res, next) => {
  const { name, cif, direction } = req.body;

  const producer = await Producer.create({
    name,
    cif,
    direction,
  });
  res.status(201).json({
    success: true,
    producer,
  });
}; */

//* Get all producers => /api/v1/producers?keyword=apple
exports.getProducers = async (req, res, next) => {
  //! CUANTOS PRODUCTOS ENSEÑAR POR PAGINA
  const resPerPage = 10;
  const producerCount = await Producer.countDocuments();

  //! apiFeatures - aqui le indicamos que busque por keyword
  const apiFeatures = new APIFeatures(Producer.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  //! FUNCION ASINCRONA - sin apifeatures
  //const products = await Product.find();

  const producers = await apiFeatures.query; //* ?keyword=apple

  //! Esto nos traerá todos los productos de la coleccion de la base de datos
  res.status(200).json({
    success: true,
    count: producers.length,
    producerCount,
    producers,
    //message: "this route will show all products in database.",
  });
};

exports.getSingleProducer = async (req, res, next) => {
  const producer = await Producer.findById(req.params.id);
  if (!producer) {
    //! CON EL USO DE ERROR HANDLER
    //return next(new ErrorHandler("Product not found", 404));

    //! SIN EL USO DE ERROR HANDLER - SEGURAMENTE HABRA QUE VOLVER A ESTE CODIGO
    return res.status(404).json({
      success: false,
      message: "Producer not found",
    });
  }
  res.status(200).json({
    success: true,
    producer,
  });
};

// Update Producer => /api/v1/admin/producer/:id
//! ESTA FUNCION NO VA A HACER FALTA
exports.updateProducer = async (req, res, next) => {
  let producer = await Producer.findById(req.params.id);
  if (!producer) {
    return res.status(404).json({
      success: false,
      message: "Producer not found",
    });
  }
  producer = await Producer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    producer,
  });
};

// Delete producer => /api/v1/admin/producer/:id
//! NO HARIA FALTA
exports.deleteProducer = async (req, res, next) => {
  const producer = await Producer.findById(req.params.id);
  if (!producer) {
    return res.status(404).json({
      success: false,
      message: "Producer not found",
    });
  }
  await producer.remove();
  res.status(200).json({
    success: true,
    message: "Producer is deleted",
  });
};
