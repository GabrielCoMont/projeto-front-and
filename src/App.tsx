import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ProductDetails } from './components/ProductDetails';
import './styles/search.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Busque o refrigerante</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/produto/:productId" element={
              <>
                <div className="search-wrapper">
                  <SearchBar />
                </div>
                <ProductDetails />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
