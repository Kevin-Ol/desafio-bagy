import React from 'react';
import MainCards from '../components/MainCards';
import SellsTable from '../components/SellsTable';
import ProductsTable from '../components/ProductsTable';
import Chart from '../components/Chart';
import SideCards from '../components/SideCards';
import { StoresContextProvider } from '../contexts/StoresContext';

function Main() {
  return (
    <main>
      <StoresContextProvider>
        <MainCards />
        <div>
          <Chart />
          <SideCards />
        </div>
        <SellsTable />
        <ProductsTable />
      </StoresContextProvider>
    </main>
  );
}

export default Main;
