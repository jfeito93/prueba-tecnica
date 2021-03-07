import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

//! Consecucion de todos los productos del backend

export const getProducts = () => async (dispatch) => {
  try {
    /* se intentara acudir a lo definido en ALL_PRODUCTS_REQUEST de reducders/productReducers.js = [] */
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    /* //! Aqui se hace el get de la data de los productos */
    const { data } = await axios.get("/api/v1/products");

    /* si lo anterior funciona, entonces... */
    /* //! es dispatch() no dispatchEvent() - ¿? */
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    /* si hay un error se acudira a lo definido en ALL_ PRODUCTS_FAIL de reducders/productReducers.js */
    /* //! es dispatch() no dispatchEvent() - ¿? */
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//! Consecucion de todos los detalles del producto desde el backend
//! en (id) le indicamos por donde queremos que nos busque y traiga el producto
export const getProductDetails = (id) => async (dispatch) => {
  try {
    /* se intentara acudir a lo definido en ALL_PRODUCTS_REQUEST de reducders/productReducers.js = [] */
    dispatch({ type: PRODUCTS_DETAILS_REQUEST });

    /* //! Aqui se hace el get de la data del detalle del producto mediante su id */
    const { data } = await axios.get(`/api/v1/product/${id}`);

    /* si lo anterior funciona, entonces... */
    /* //! es dispatch() no dispatchEvent() - ¿? */
    dispatch({
      type: PRODUCTS_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    /* si hay un error se acudira a lo definido en ALL_ PRODUCTS_FAIL de reducders/productReducers.js */
    /* //! es dispatch() no dispatchEvent() - ¿? */
    dispatch({
      type: PRODUCTS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors //!igual no hace falta

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
