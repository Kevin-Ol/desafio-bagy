import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

function Card({
  title, text, currency, loading, titleTestId, textTestId,
}) {
  const convertBRL = useCallback((price) => price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }), []);

  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 data-testid={titleTestId}>{title}</h2>
      <p data-testid={textTestId}>
        {currency ? convertBRL(parseFloat(text)) : text }
      </p>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  currency: false,
  text: '',
  titleTestId: '',
  textTestId: '',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currency: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  titleTestId: PropTypes.string,
  textTestId: PropTypes.string,
};
