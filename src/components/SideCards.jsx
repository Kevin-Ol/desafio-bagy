import React from 'react';
import Card from './Card';
import SelectCard from './SelectCard';
import UseStores from '../hooks/UseStores';
import '../styles/SideCards.scss';

function SideCards() {
  const { currentMonthRevenues, loading } = UseStores();

  const storeOptions = ['Estilo Pri', 'Vilma Calçados', 'Mary Lingerie', 'Loja Belíssima'];
  const monthOptions = ['Julho', 'Junho'];
  const yearOptions = [2020, 2019];

  return (
    <section className="side-cards">
      <SelectCard title="Loja" options={storeOptions} loading={loading} />
      <SelectCard title="Mês" options={monthOptions} loading={loading} />
      <SelectCard title="Ano" options={yearOptions} loading={loading} />
      <Card
        title="Total de faturamento"
        text={currentMonthRevenues.total}
        currency
        loading={loading}
      />
      <Card title="Análise comparativa" text="Positivo" loading={loading} />
    </section>
  );
}

export default SideCards;
