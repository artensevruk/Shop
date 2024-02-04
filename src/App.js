
import './index.css';
import {Header} from "./components/Header"
import {ItemContainer} from "./components/ItemContainer"
import {Catalog} from "./components/Catalog"
import {Basement} from "./components/Basement"
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="container">
      <Header />
      <ItemContainer />
      <Outlet />
      <Basement />
    </div>
  );
}

export default App;
