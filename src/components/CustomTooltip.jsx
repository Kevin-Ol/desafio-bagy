import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

function CustomTooltip({ active, payload }) {
  if (!active) {
    return null;
  }

  const convertBRL = useCallback((price) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }), []);

  const value = useMemo(() => convertBRL(payload[0].value));

  return (
    <p>{value}</p>
  );
}

export default CustomTooltip;

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
  })),
};
