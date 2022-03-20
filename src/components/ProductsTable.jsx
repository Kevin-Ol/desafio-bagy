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
        <span>Produto</span>
        <span>Loja</span>
        <span>Preço</span>
        <span>Data</span>
      </div>
      <ul>
        {products.map((product) => {
          const productDate = new Date(product.date);

          return (
            <li key={product.id}>
              <span>{`${product.product_name} #${product.product_code}`}</span>
              <span>
                {product.store_name}
              </span>
              <span>{convertBRL(product.unit_price)}</span>
              <span>{convertDate(productDate)}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsTable;
