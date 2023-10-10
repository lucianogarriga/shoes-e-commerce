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
import MaxWidthContainer from "./components/Containers/MaxWidth/MaxWidthContainer";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutOk from "./pages/Checkout/CheckoutOk";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <MaxWidthContainer>
        <Routes> 
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout-ok" element={<CheckoutOk/>}/>
          
        </Routes>
        </MaxWidthContainer>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
