
import './index.css';
import {Header} from "./components/Header"
import {ItemContainer} from "./components/ItemContainer"
import {Catalog} from "./components/Catalog"
import {Basement} from "./components/Basement"


function App() {
  return (
    <div className="container">
      <Header />
      <ItemContainer />
      <Catalog />
      <Basement />
    </div>
  );
}

export default App;
