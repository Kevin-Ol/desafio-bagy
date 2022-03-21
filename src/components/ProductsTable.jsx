import React, { useCallback } from 'react';
import UseStores from '../hooks/UseStores';
import '../styles/ProductsTable.scss';

function ProductsTable() {
  const { products, loading } = UseStores();

  const convertBRL = useCallback((price) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }), []);

  const convertDate = useCallback((date) => date.toLocaleDateString(
    'pt-br',
    { day: '2-digit', month: '2-digit', year: '2-digit' },
  ), []);

  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }

  return (
    <main className="products-table">
      <div>
        <span data-testid="products-category-0">Produto</span>
        <span data-testid="products-category-1">Loja</span>
        <span data-testid="products-category-2">Preço</span>
        <span data-testid="products-category-3">Data</span>
      </div>
      <ul>
        {products.map((product, index) => {
          const productDate = new Date(product.date);

          return (
            <li key={product.id}>
              <span data-testid={`products-name-${index}`}>
                {`${product.product_name} #${product.product_code}`}
              </span>
              <span data-testid={`products-store-${index}`}>
                {product.store_name}
              </span>
              <span data-testid={`products-price-${index}`}>{convertBRL(product.unit_price)}</span>
              <span data-testid={`products-date-${index}`}>{convertDate(productDate)}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsTable;
