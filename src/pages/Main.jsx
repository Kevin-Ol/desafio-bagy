import React from 'react';
import MainCards from '../components/MainCards';
import SellsTable from '../components/SellsTable';
import { StoresContextProvider } from '../contexts/StoresContext';

function Main() {
  return (
    <main>
      <StoresContextProvider>
        <MainCards />
        <SellsTable />
      </StoresContextProvider>
    </main>
  );
}

export default Main;
