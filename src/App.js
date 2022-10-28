import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "../src/Components/Products";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />

        {/* <Home /> */}
      </Routes>
    </>
  );
}

export default App;
