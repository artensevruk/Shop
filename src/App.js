
import './index.css';
import {Header} from "./components/Header"
import {ItemContainer} from "./components/ItemContainer"
import {Catalog} from "./components/Catalog"
import {Basement} from "./components/Basement"
import { Outlet } from 'react-router-dom';
import { getDataBasket } from './getDataBasket';
import { getData } from './getData';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="container">
      <Header />
      <Outlet />
      <Basement />
    </div>
    </QueryClientProvider>
  );
}


getDataBasket();
getData()
export default App;
