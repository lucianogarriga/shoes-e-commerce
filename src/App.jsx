import ItemDetailContainer from "./components/Containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/Containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/Containers/NavBar/NavBar";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
