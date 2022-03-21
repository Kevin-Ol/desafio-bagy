import React from 'react';
import Card from './Card';
import UseStores from '../hooks/UseStores';
import '../styles/MainCards.scss';

function MainCards() {
  const { user, loading } = UseStores();

  return (
    <section className="main-cards">
      <Card
        title="Total de Lojas"
        text={user.total_stores}
        loading={loading}
        titleTestId="total-stores-title"
        textTestId="total-stores-quantity"
      />
      <Card
        title="Faturamento Total"
        currency
        text={user.total_revenues}
        loading={loading}
        titleTestId="total-revenues-title"
        textTestId="total-revenues-value"
      />
      <Card
        title="Loja Destaque"
        text={user.highlighted_store}
        loading={loading}
        titleTestId="highlighted-store-title"
        textTestId="highlighted-store-name"
      />
      <Card
        title="Meta Mensal"
        currency
        text={user.monthly_goal}
        loading={loading}
        titleTestId="monthly-goal-title"
        textTestId="monthly-goal-value"
      />
    </section>
  );
}

export default MainCards;
