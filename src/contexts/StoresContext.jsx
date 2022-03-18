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

export function StoresContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data: { data } } = await api.post(
        '/',
        {
          query: MAIN_INFO_QUERY,
        },
      );

      setUser(data.User);
      setLoading(false);
    };

    fetch();
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
  }), [user, loading]);

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
