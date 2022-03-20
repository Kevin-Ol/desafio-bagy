import React, { useState, useCallback, useMemo } from 'react';
import UseStores from '../hooks/UseStores';
import '../styles/SellsTable.scss';

function SellsTable() {
  const { sells, loading } = UseStores();
  const [period, setPeriod] = useState('weekly');

  const convertBRL = useCallback((price) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }), []);

  const totalPrice = useMemo(() => sells.reduce((acc, sell) => acc + sell.price, 0), [sells]);

  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }

  return (
    <main className="sells-table">
      <div>
        <div>
          <h2>Total de Compras</h2>
          <p>
            Valor geral:
            {' '}
            {convertBRL(totalPrice)}
          </p>
        </div>
        <select value={period} onChange={({ target }) => setPeriod(target.value)}>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensal</option>
        </select>
      </div>
      <ul>
        {sells.map((sell) => (
          <li key={sell.id}>
            <span>{sell.store_name}</span>
            <span>
              {sell.quantity}
              {' '}
              compras
            </span>
            <span>{convertBRL(sell.price)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default SellsTable;
