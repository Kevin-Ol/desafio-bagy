import React, { useState } from 'react';
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

  const [month, setMonth] = useState(monthOptions[0]);
  const [year, setYear] = useState(yearOptions[0]);

  return (
    <section className="side-cards">
      <SelectCard
        title="Loja"
        options={storesNamesList}
        loading={loading}
        handleChange={changeStoreName}
        value={currentStoreName}
        titleTestId="store-title"
        selectTestId="select-store"
      />
      <SelectCard
        title="Mês"
        options={monthOptions}
        loading={loading}
        value={month}
        handleChange={({ target }) => setMonth(target.value)}
        titleTestId="month-title"
        selectTestId="select-month"
      />
      <SelectCard
        title="Ano"
        options={yearOptions}
        loading={loading}
        value={year}
        handleChange={({ target }) => setYear(target.value)}
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
