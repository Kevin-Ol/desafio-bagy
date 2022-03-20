import React from 'react';
import MainCards from '../components/MainCards';
import SellsTable from '../components/SellsTable';
import ProductsTable from '../components/ProductsTable';
import Chart from '../components/Chart';
import SideCards from '../components/SideCards';
import { StoresContextProvider } from '../contexts/StoresContext';
import '../styles/Main.scss';

function Main() {
  return (
    <main>
      <StoresContextProvider>
        <MainCards />
        <div className="chart-info-container">
          <Chart />
          <SideCards />
        </div>
        <div className="additional-info-container">
          <SellsTable />
          <ProductsTable />
        </div>
      </StoresContextProvider>
    </main>
  );
}

export default Main;
