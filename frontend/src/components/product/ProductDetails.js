import React, { Fragment, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

import { useAlert } from "react-alert";

import { useDispatch, useSelector } from "react-redux";

//! ESTO NO SE SI VA A HABER QUE USARLO
import { getProductDetails, clearErrors } from "../../actions/productActions";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  //! ALERT: NO SE SI
  const alert = useAlert();

  //! ALERT: NO SE SI
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));

    //! ALERT: NO SE SI
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, match.params.id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 mt-5">
              {/* //!primera alusion a propiedades del product */}
              <h3>{product.name}</h3>
              <p id="product_id">Product # {product._id}</p>

              <hr />

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.ratings / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">{product.ratings}</span>

              <hr />

              <p id="product_price">{product.price} €</p>

              <hr />

              <h4 id="product_seller mb-3">
                Producer name:{" "}
                <strong>{product.producer && product.producer[0].name}</strong>
              </h4>
              <h4 id="product_seller mb-3">
                Producer CIF:{" "}
                <strong>{product.producer && product.producer[0].cif}</strong>
              </h4>
              <h4 id="product_seller mb-3">
                Producer direction:{" "}
                <strong>
                  {product.producer && product.producer[0].direction}
                </strong>
              </h4>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
