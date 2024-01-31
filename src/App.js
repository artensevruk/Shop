
import './index.css';
import {Header} from "./components/Header"
import {ItemContainer} from "./components/ItemContainer"
import {Catalog} from "./components/Catalog"
import {Basement} from "./components/Basement"
import goods from "./Catalog.json";
import {ElementCatalog} from "./components/Catalog"


function App() {
  return (
    <div className="container">
      <Header />
      <ItemContainer />
      <Catalog />
      <Basement />
      <ElementCatalog product={goods.map((element) => element)} />
    </div>
  );
}

export default App;
