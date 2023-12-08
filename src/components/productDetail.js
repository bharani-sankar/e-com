import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/productActions';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]);

  if (!product) {
    return <div className="container">Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true);
    console.log('Cart state:', cart);
  };

  return (
    <div className="container">
      <div className="row">
        {product && (
          <>
            <div className="col-md-6">
              <img src={product.image} alt={product.title} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h3 className="mt-3">{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <button className="btn btn-primary">Buy Now</button>
              {productId && (
                <>
                  {addedToCart ? (
                    <button className="btn btn-success" onClick={() => navigate('/cart')}>Cart</button>
                  ) : (
                    <button className="btn btn-danger" onClick={handleAddToCart}>Add to Cart</button>
                  )}
                  <Link to="/home" className="btn btn-secondary">Back to Home</Link>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
