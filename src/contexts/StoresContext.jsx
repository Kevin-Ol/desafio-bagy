import React, {
  createContext, useMemo, useEffect, useState,
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

const stores = [4, 2, 1, 3];

const storeInfoQuery = (id) => `
  {
    Store(id: ${id}) {
      name
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data: { data } } = await api.post(
        '/',
        {
          query: MAIN_INFO_QUERY,
        },
      );

      const storePromises = stores.map((store) => api.post(
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

      setUser(data.User);
      setSells(allSells);
      setProducts(allProducts);
      setLoading(false);
    };

    fetch();
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    sells,
    products,
  }), [user, loading, sells, products]);

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
