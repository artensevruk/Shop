import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header"
import {ItemContainer} from "./components/ItemContainer"
import {Catalog} from "./components/Catalog"
import {Basement} from "./components/Basement"


function App() {
  return (
    <div className="App">
      <Header />
      <ItemContainer />
      <Catalog />
      <Basement />
    </div>
  );
}

export default App;
