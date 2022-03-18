import { useContext } from 'react';
import { StoresContext } from '../contexts/StoresContext';

function UseStores() {
  const value = useContext(StoresContext);

  return value;
}

export default UseStores;
