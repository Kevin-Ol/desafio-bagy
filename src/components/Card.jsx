import React from 'react';
import PropTypes from 'prop-types';

function Card({
  title, text, currency, loading,
}) {
  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{title}</h2>
      {currency
        ? (
          parseFloat(text).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })
        )
        : <p>{text}</p> }
    </div>
  );
}

export default Card;

Card.defaultProps = {
  currency: false,
  text: '',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currency: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};
