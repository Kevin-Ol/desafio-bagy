import React from 'react';
import Card from './Card';
import SelectCard from './SelectCard';
import UseStores from '../hooks/UseStores';
import '../styles/SideCards.scss';

function SideCards() {
  const {
    currentMonthRevenues, storesNamesList, loading, changeStoreName, currentStoreName,
  } = UseStores();

  const monthOptions = ['Julho', 'Junho'];
  const yearOptions = [2020, 2019];

  return (
    <section className="side-cards">
      <SelectCard
        title="Loja"
        options={storesNamesList}
        handleChange={changeStoreName}
        loading={loading}
        value={currentStoreName}
        titleTestId="store-title"
        selectTestId="select-store"
      />
      <SelectCard
        title="Mês"
        options={monthOptions}
        loading={loading}
        titleTestId="month-title"
        selectTestId="select-month"
      />
      <SelectCard
        title="Ano"
        options={yearOptions}
        loading={loading}
        titleTestId="year-title"
        selectTestId="select-year"
      />
      <Card
        title="Total de faturamento"
        text={currentMonthRevenues.total}
        currency
        loading={loading}
        titleTestId="store-revenues-title"
        textTestId="store-revenues-value"
      />
      <Card
        title="Análise comparativa"
        text="Positivo"
        loading={loading}
        titleTestId="analysis-title"
        textTestId="analysis-text"
      />
    </section>
  );
}

export default SideCards;
