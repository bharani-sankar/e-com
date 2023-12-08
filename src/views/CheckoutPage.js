import React from 'react';
import { Link } from 'react-router-dom';
import AddressComponent from '../components/Address';

const CheckoutPage = () => {
  return (
    <div>
      <Link to="/buy-now" />
      <AddressComponent />
         </div>
  );
};

export default CheckoutPage;
