import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const totalQuantity = useSelector((state) => {
    const cartItems = state.cart.cartItems;
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="header">
        <div className="header-logo">
        <h1 className="text-center">Welcome</h1>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <div className="accounts-button">
            </div>
          </div>
          <Link to="/cart">
            <div className="cart-button">
              <span>Cart</span>
              <span>{totalQuantity}</span>
            </div>
          </Link>

        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.category}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
