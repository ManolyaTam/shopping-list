import './App.css';
import { useState, createContext } from 'react'
import NavBar from './components/navbar/navbar'
import CartPage from './pages/cart/cart';
import ViewPage from './pages/view/view';

export const pageContext = createContext();
export const cartContext = createContext();
function App() {
  const [page, setPage] = useState('view'); // values: view, cart
  const [cart, setCart] = useState([]); // values: view, cart
  return (
    <div className="App">
      <pageContext.Provider value={{ page, setPage }}>
        <cartContext.Provider value={{ cart, setCart }}>
          <NavBar />
          {page === 'view' && <ViewPage />}
          {page === 'cart' && <CartPage />}
        </cartContext.Provider>
      </pageContext.Provider>
    </div>
  );
}

export default App;
