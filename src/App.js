import './App.css';
import Home from './views/Home'
import Register from './components/Register';
import Login from './components/Login';
import ProductDetail from './components/productDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartView from './components/CartView';
import CheckoutPage from './views/CheckoutPage';
import BuyNow from './components/BuyNow';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="/cart" element={<CartView />} /> 
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/buy-now" element={<BuyNow />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
