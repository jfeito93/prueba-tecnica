import React, { Fragment, useEffect } from "react";

import MetaData from "./MetaData";
import Product from "../product/product";
import Loader from "../layout/Loader"; //!quitar si no se usa el loader

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useAlert } from "react-alert";

//!para conseguir pintar producer igual:
//necesidad de la creacion de
//import { getProducers } from "../../actions/producerActions";

//!para conseguir pintar producer igual, esto mismo pero con producer
const Home = () => {
  //!ALERT-ERROR NO SE SI HACE FALTA
  const alert = useAlert(); //! react-alert

  const dispatch = useDispatch();

  /* a  ver que pasa con error */
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      //alert.success("Success")
      alert.error(error);
    }

    dispatch(getProducts());

    //! react-alert
    if (error) {
      alert.error(error);
    }
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {/* //! a continuacion el como indicar que se esta cargando la pagina cuando haces refresh */}
      {/* //!tambien con el <Loader /> la creacion con las indicaciones del loader con app.css y loader.js */}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Inventario"} /> {/* PESTAÑA WEB */}
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {/* //! LOOP AQUI = asegurate de que "products" existe y mapea cada producto */}
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
