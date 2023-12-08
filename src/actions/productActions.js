//productActions.js
import axios from 'axios';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios
      .get('https://fakestoreapi.com/products');
      dispatch({ 
        type: 'FETCH_PRODUCTS', 
        payload: response.data
      })} 
    catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
// cartActions.js

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};
