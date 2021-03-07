import React, { Fragment, useState, useEffect } from "react";
import Pagination from "react-js-pagination";

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
const Home = ({ match }) => { //! BUSCADOR
  const [currentPage, setCurrentPage] = useState(1);

  //!ALERT-ERROR NO SE SI HACE FALTA
  const alert = useAlert(); //! react-alert

  const dispatch = useDispatch();

  //! BUSCADOR
  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword; //! BUSCADOR

  useEffect(() => {
    if (error) {
      //alert.success("Success")
      alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage)); //! BUSCADOR

    //! react-alert
    if (error) {
      alert.error(error);
    }
  }, [dispatch, alert, error, keyword, currentPage]); //! BUSCADOR

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      {/* //! a continuacion el como indicar que se esta cargando la pagina cuando haces refresh */}
      {/* //!tambien con el <Loader /> la creacion con las indicaciones del loader con app.css y loader.js */}
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Inventario"} /> {/* PESTAÑA WEB */}
          <h1 id="products_heading">Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {/* //! LOOP AQUI = asegurate de que "products" existe y mapea cada producto */}
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
          {/* //!ESTO NO FUNCIONA CON PAGINACION */}
          {resPerPage <= productsCount && (
            <div className="d-flex justify-content-center mt-5">
              {/* //!activePage={currentPage} = AQUELLO QUE INDICA EN QUE PAGINA ESTA EL USUARIO */}
              {/* //!onChange={setCurrentPageNo} = indicacion de la pagina en la que estes cuando cambies de pagina */}
              {/* //!nextPageText={"Next"} = indicacion de "next" para pasar a la siguiente pagina a la que estes */}
              {/* //!firstPageText={"First"} y  lastPageText={"Last"} = IGUAL NO LAS USO */}
              {/* //!BOOTSRAP CLASSES, NO HAY QUE DEFINIRLAS POR CSS =  */}
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
