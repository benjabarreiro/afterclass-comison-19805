import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemsSeleccionados from "./components/ItemsSeleccionados";
import {NameContextProvider} from "./context/NamesContext";

function App() {
  return (
    <NameContextProvider>
      <div className="App">
        <ItemListContainer />
        <ItemsSeleccionados />
      </div>
    </NameContextProvider>
  );
}

export default App;
