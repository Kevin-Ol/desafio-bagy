import React from 'react';
import Card from './Card';
import UseStores from '../hooks/UseStores';

function MainCards() {
  const { user, loading } = UseStores();

  return (
    <section className="main-cards">
      <Card title="Total de Lojas" text={user.total_stores} loading={loading} />
      <Card title="Faturamento Total" currency text={user.total_revenues} loading={loading} />
      <Card title="Loja Destaque" text={user.highlighted_store} loading={loading} />
      <Card title="Meta Mensal" currency text={user.monthly_goal} loading={loading} />
    </section>
  );
}

export default MainCards;
