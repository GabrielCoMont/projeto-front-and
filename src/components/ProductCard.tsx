import { Link } from 'react-router-dom';
import { Product } from '../types/api';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const mainImage = product.items[0]?.images[0]?.imageUrl;
  const price = product.items[0]?.sellers[0]?.commertialOffer.Price;
  const listPrice = product.items[0]?.sellers[0]?.commertialOffer.ListPrice;
  const isAvailable = (product.items[0]?.sellers[0]?.commertialOffer.AvailableQuantity || 0) > 0;

  return (
    <div className="product-card">
      <img src={mainImage} alt={product.productName} className="product-image" />
      <div className="product-info">
        <h4 className="product-name">{product.productName}</h4>
        <p className="product-brand">{product.brand}</p>
        
        <div className="product-price">
          {listPrice > price && (
            <span className="list-price">
              {listPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          )}
          <span className="price">
            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        {isAvailable ? (
          <Link to={`/produto/${product.productId}`} className="buy-button">
            Ver produto
          </Link>
        ) : (
          <span className="out-of-stock">Produto Indisponível</span>
        )}
      </div>
    </div>
  );
}; 