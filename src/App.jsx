import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/Containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/Containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/Containers/NavBar/NavBar";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
 
import Footer from "./components/Containers/Footer/Footer";
import About from "./pages/About/About";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes> 
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
