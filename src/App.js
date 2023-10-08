import './App.css';
import { useState, createContext } from 'react'
import CartPage from './pages/cart/cart';
import ViewPage from './pages/view/view';

export const pageContext = createContext();
function App() {
  const [page, setPage] = useState('view');
  return (
    <div className="App">
      <pageContext.Provider value={setPage}>
        <h2>My Shopping List</h2>
        {page === 'view' && <ViewPage />}
        {page === 'cart' && <CartPage />}
      </pageContext.Provider>
    </div>
  );
}

export default App;
