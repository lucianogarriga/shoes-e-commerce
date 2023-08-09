import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/> 
      <ItemListContainer />  
      <ItemDetailContainer itemId={2}/>
    </>
  );
}

export default App;
