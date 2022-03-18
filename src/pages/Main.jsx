import React from 'react';
import MainCards from '../components/MainCards';
import { StoresContextProvider } from '../contexts/StoresContext';

function Main() {
  return (
    <main>
      <StoresContextProvider>
        <MainCards />
      </StoresContextProvider>
    </main>
  );
}

export default Main;
