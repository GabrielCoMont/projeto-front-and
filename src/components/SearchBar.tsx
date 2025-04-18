import { useState, useEffect, useRef } from 'react';
import { Product } from '../types/api';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/products';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [autocompleteResults, setAutocompleteResults] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef<number>();

  const fetchResults = async (term: string) => {
    if (!term) {
      setAutocompleteResults([]);
      setProducts([]);
      return;
    }

    setLoading(true);
    try {
      // Simulando delay da API
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const filteredProducts = mockProducts.filter(product => 
        product.productName.toLowerCase().includes(term.toLowerCase()) ||
        product.brand.toLowerCase().includes(term.toLowerCase())
      );

      const suggestions = filteredProducts.map(p => p.productName);
      
      setAutocompleteResults(suggestions);
      setProducts(filteredProducts.slice(0, 3));
    } catch (error) {
      console.error('Erro ao buscar resultados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      fetchResults(searchTerm);
    }, 300);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchTerm]);

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para buscar refrigerantes..."
          className="search-input"
        />
        {loading && <div className="loading-spinner" />}
      </div>

      {(autocompleteResults.length > 0 || products.length > 0) && (
        <div className="search-results">
          {autocompleteResults.length > 0 && (
            <div className="autocomplete-section">
              <h3>Sugestões</h3>
              <ul>
                {autocompleteResults.map((item, index) => (
                  <li key={index} onClick={() => setSearchTerm(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {products.length > 0 && (
            <div className="products-section">
              <h3>Produtos</h3>
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product.productId} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}; 