const Product = require("../models/product");
// Importacion de Product de "../models/product"

const Producer = require("../models/producer");

const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
// Importacion de funcion de conexion a la base de datos (connectDatabase) de "../config/database"

const products = require("../data/product.json");

const producers = require("../data/producer.json");

//* Setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();
// conexion

const seedProducts = async () => {
  try {
    await Product.deleteMany(); /* Esto eliminara todos los productos de la coleccion */
    console.log("Products are deleted");

    await Product.insertMany(
      products
    ); /* Esto añadira los productos de "../data/product.json" */
    console.log("All products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();


const seedProducers = async () => {
  try {
    await Producer.deleteMany();
    console.log("Producers are deleted");

    await Producer.insertMany(
      producers
    );
    console.log("All producers are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducers();
