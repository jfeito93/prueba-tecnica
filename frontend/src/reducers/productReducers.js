import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        loading: true, // loading verdadero
        products: [], // los productos los neviamos a un array vacio
      };

    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products, // traida de los productos
        productsCount: action.payload.productsCount, // cuenta de los productos traidos
      };

    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    //! NO SE SI VA A HACER FALTA
    case CLEAR_ERRORS /* esto borra el error y lo indica como nulo */:
      return {
        ...state /* //! ¿? */,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case PRODUCTS_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    //! NO SE SI VA A HACER FALTA
    case CLEAR_ERRORS /* esto borra el error y lo indica como nulo */:
      return {
        ...state /* //! ¿? */,
        error: null,
      };

    default:
      return state;
  }
};
