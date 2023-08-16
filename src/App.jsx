import ItemDetailContainer from './components/Containers/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from "./components/Containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/Containers/NavBar/NavBar";  

function App() {
  return (
    <>
      <NavBar/> 
      {/* <ItemListContainer />   */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
