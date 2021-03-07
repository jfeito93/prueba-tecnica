import React, { Fragment } from "react";

import { Route } from "react-router-dom"; //! BUSCADOR

import Search from "../layout/Search"; //! BUSCADOR //! para poder usar el "<Route />" de abajo

import "../../App.css";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            {/* Esto es el logo - que hacer con ello ¿? */}
            {/* <img src="./images/logoInventario.png" alt="logoInventario"/> */}
          </div>
        </div>
        {/* //! BUSCADOR */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          {/* //!esto se pone a continuacion ya que no podemos usar el "const Search" de Search.js como tal */}
          <Route render={({ history })=> <Search history={history} />} /> 
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
