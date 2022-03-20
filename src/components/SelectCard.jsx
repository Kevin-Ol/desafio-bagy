import React from 'react';
import PropTypes from 'prop-types';

function SelectCard({
  title, options, loading, handleChange, value,
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
      <select value={value} onChange={handleChange}>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default SelectCard;

SelectCard.defaultProps = {
  handleChange: () => {},
  value: '',
};

SelectCard.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
