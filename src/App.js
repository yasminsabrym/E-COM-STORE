// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "../src/Components/Products";
import Product from "../src/Components/Product";
import Cart from "../src/Components/Cart";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        {/* <Route path="*" element={<p>Path not resolved</p>} /> */}
        <Route exact path="/cart" element={<Cart />} />

        {/* <Home /> */}
      </Routes>
    </>
  );
}

export default App;
