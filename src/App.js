import './App.css';
import { useState, createContext } from 'react'
import NavBar from './components/navbar/navbar'
import CartPage from './pages/cart/cart';
import ViewPage from './pages/view/view';

export const pageContext = createContext();
function App() {
  const [page, setPage] = useState('view');
  return (
    <div className="App">
      <pageContext.Provider value={setPage}>
        <NavBar />
        {page === 'view' && <ViewPage />}
        {page === 'cart' && <CartPage />}
      </pageContext.Provider>
    </div>
  );
}

export default App;
