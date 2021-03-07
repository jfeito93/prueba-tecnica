import React from "react";
import { Link } from "react-router-dom";

const product = ({ product }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          /* //! SI USAS IMAGEN GUARDADA EN CLOUDIFY COMO PROPIEDAD DEL OBJETO PRODUCT */
          /* src={product.images[0].url} */
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product.name._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            {/* //!AQUI VAN LAS ESTRELLAS - NO SE SI LO VOY A USAR - esta guapisimo */}
            <div className="rating-outer">
              {/* aqui viene la receta de como hacer la relacion de aparicion de estrellas en realcion al numero de rating que tenga */}
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            {/* //!representacion de propiedad rating del objeto producto */}
            {/* aqui le indicamos el numero de ratings que tiene dicho */}
            <span id="no_of_reviews">{product.ratings}</span>
          </div>
          {/* //!representacion de propiedad price del objeto producto */}
          <p className="card-text">{product.price} €</p>
          {/* //! alusion al boton que llevara al link del producto por su id */}
          <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-block"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default product;
