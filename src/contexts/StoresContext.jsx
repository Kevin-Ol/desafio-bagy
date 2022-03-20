import React, {
  createContext, useMemo, useEffect, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

export const StoresContext = createContext();

const MAIN_INFO_QUERY = `{
  User(id: 1) {
    name
    total_stores
    total_revenues
    highlighted_store
    monthly_goal
  }
}`;

const storesIds = [1, 4, 2, 3];

const storeInfoQuery = (id) => `
  {
    Store(id: ${id}) {
      name
      revenues
      Products {
        id
        product_name
        product_code
        unit_price
        date
      }
      Sells {
        id
        quantity
        price
      }
    }
  }
  `;

export function StoresContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [sells, setSells] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [storesNamesList, setStoresNamesList] = useState([]);
  const [currentStoreName, setCurrentStoreName] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentMonthRevenues, setCurrentMonthRevenues] = useState({});
  const [previousMonthRevenues, setPreviousMonthRevenues] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const { data: { data } } = await api.post(
        '/',
        {
          query: MAIN_INFO_QUERY,
        },
      );

      const storePromises = storesIds.map((store) => api.post(
        '/',
        {
          query: storeInfoQuery(store),
        },
      ));

      const storesResolved = await Promise.all(storePromises);
      const storesData = storesResolved.map((store) => store.data.data);

      const allSells = storesData.reduce((acc, { Store }) => {
        const storeSells = Store.Sells;
        const sellsWithName = storeSells.map((sell) => ({ store_name: Store.name, ...sell }));
        return [...acc, ...sellsWithName];
      }, []);

      allSells.sort((a, b) => b.quantity - a.quantity);

      const allProducts = storesData.reduce((acc, { Store }) => {
        const storeProducts = Store.Products;
        const productsWithName = storeProducts.map((product) => (
          { store_name: Store.name, ...product }));
        return [...acc, ...productsWithName];
      }, []);

      allProducts.sort((a, b) => (b.date > a.date ? 1 : -1));

      const storeNames = storesData.map(({ Store }) => Store.name);
      const currentStore = storesData[0].Store;

      setStoresNamesList(storeNames);
      setStores(storesData);
      setCurrentStoreName(storesData[0].Store.name);
      setCurrentMonthRevenues(currentStore.revenues['2020'].july);
      setPreviousMonthRevenues(currentStore.revenues['2020'].june);
      setUser(data.User);
      setSells(allSells);
      setProducts(allProducts);
      setLoading(false);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (stores.length) {
      const store = stores.find(({ Store }) => Store.name === currentStoreName).Store;
      setCurrentMonthRevenues(store.revenues['2020'].july);
      setPreviousMonthRevenues(store.revenues['2020'].june);
    }
  }, [currentStoreName]);

  const changeStoreName = useCallback(({ target }) => {
    setCurrentStoreName(target.value);
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    sells,
    products,
    currentMonthRevenues,
    previousMonthRevenues,
    storesNamesList,
    currentStoreName,
    changeStoreName,
  }), [
    user,
    loading,
    sells,
    products,
    currentMonthRevenues,
    previousMonthRevenues,
    storesNamesList,
    currentStoreName,
    changeStoreName,
  ]);

  return (
    <StoresContext.Provider value={value}>
      {children}
    </StoresContext.Provider>
  );
}

StoresContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
