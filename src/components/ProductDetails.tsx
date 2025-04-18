import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { mockProducts } from '../data/products';
import '../styles/productDetails.css';

export const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = mockProducts.find(p => p.productId === productId);

  if (!product) {
    return <div className="not-found">Produto não encontrado</div>;
  }

  const mainImage = product.items[0]?.images[0]?.imageUrl;
  const price = product.items[0]?.sellers[0]?.commertialOffer.Price;
  const listPrice = product.items[0]?.sellers[0]?.commertialOffer.ListPrice;
  const isAvailable = (product.items[0]?.sellers[0]?.commertialOffer.AvailableQuantity || 0) > 0;

  const handleIncreaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(prev => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-details-left">
          <img src={mainImage} alt={product.productName} className="product-details-image" />
        </div>
        
        <div className="product-details-right">
          <h1 className="product-details-name">{product.productName}</h1>
          <div className="product-details-brand">Marca: {product.brand}</div>
          
          <div className="product-details-price-container">
            {listPrice > price && (
              <div className="product-details-list-price">
                {listPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
            )}
            <div className="product-details-price">
              {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            <div className="product-details-installments">
              em até 10x de {(price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
          </div>

          <div className="product-details-shipping">
            <div className="shipping-calculator">
              <input
                type="text"
                placeholder="Digite seu CEP"
                className="cep-input"
              />
              <button className="cep-button">OK</button>
            </div>
          </div>

          {isAvailable ? (
            <>
              <div className="product-details-quantity">
                <span>quantidade:</span>
                <div className="quantity-selector">
                  <button 
                    className="quantity-button"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly 
                    className="quantity-input" 
                  />
                  <button 
                    className="quantity-button"
                    onClick={handleIncreaseQuantity}
                    disabled={quantity >= 99}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="product-details-buy-button">
                comprar
              </button>
            </>
          ) : (
            <div className="product-details-unavailable">
              Produto Indisponível
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 