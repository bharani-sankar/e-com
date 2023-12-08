// cartReducer.js

import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from "../actions/cartActions";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Checks if the product is already in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If the product is already in the cart, update the quantity of the existing item
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1, warningMessage: null }],
        };
      }

    case REMOVE_FROM_CART:
      // Remove an item from the cart based on the productId
      const updatedCartItemsAfterRemove = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItemsAfterRemove,
      };

    case INCREMENT_QUANTITY:
      // Increment the quantity of an item in the cart based on the productId
      const updatedCartItemsAfterIncrement = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1, warningMessage: null };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItemsAfterIncrement,
      };

    case DECREMENT_QUANTITY:
      // Decrement the quantity of an item in the cart based on the productId
      const updatedCartItemsAfterDecrement = state.cartItems.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1, warningMessage: null };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItemsAfterDecrement,
      };

    default:
      return state;
  }
};

export default cartReducer;
