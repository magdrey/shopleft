
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import Cart from "./component/Cart";
import Login from "./Logint/Login";
import Foot from './component/Foot';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/cart/" element={<Cart/>} />
        <Route exact path="/login/" element={<Login />} />
      </Routes>

      <Foot />
     

    </>
  );
}

export default App;
