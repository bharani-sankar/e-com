// CartView.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../actions/cartActions';

const CartView = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const maximumQuantity = 10;

  const handleIncrement = (productId, currentQuantity) => {
    if (currentQuantity < maximumQuantity) {
      dispatch(incrementQuantity(productId));
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          const warningMessage = 'Maximum quantity of this product in the cart is 10';
          console.log(warningMessage);
          alert(warningMessage);
          return {
            ...item,
            warningMessage: warningMessage,
          };
        }
        return item;
      });
      dispatch({ type: 'UPDATE_CART_ITEMS', payload: updatedCartItems });
    }
  };
  
  

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-3 px-5">
        <h2>Your Cart</h2>
        <span>
          <Link to="/home" className="btn btn-danger">Back</Link>
        </span>
      </div>
      {cartItems.length === 0 ? (
        <div style={{ width: '90%', margin: '0 auto', border: '1px solid #ccc', padding: '10px' }}>
          <p>No items in your cart</p>
        </div>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
              <div className="row align-items-center mx-5">
                <div className="col-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </div>
                <div className="col-6">
                  <h6>{item.title}</h6>
                  <p>Category: {item.category}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="col-3">
                  <button
                    style={{ marginRight: '10px' }}
                    className="btn btn-sm btn-primary px-3"
                    onClick={() => handleIncrement(item.id, item.quantity)}
                  >
                    +
                  </button>
                  <button
                    style={{ marginRight: '10px' }}
                    className="btn btn-sm btn-primary px-3"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                  </div>
              </div>
            </li>
          ))}
          <Link to="/buy-now">
        <button className="btn btn-danger">Buy Now</button>
      </Link>
        </ul>
      )}
    </div>
  );
};

export default CartView;
