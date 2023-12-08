import React from 'react';
import { useSelector } from 'react-redux';

const BuyNowPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container">
      <h2 className="mt-3">Buy Now</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="row">
              <div className="col-6">
                <h6>{item.title}</h6>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="col-6">
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3">Total Amount: ${calculateTotalAmount(cartItems)}</p>
    </div>
  );
};

const calculateTotalAmount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default BuyNowPage;
