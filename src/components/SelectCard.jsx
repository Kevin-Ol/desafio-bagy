import React from 'react';
import PropTypes from 'prop-types';

function SelectCard({ title, options, loading }) {
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
      <select defaultValue={options[0]}>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default SelectCard;

SelectCard.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};
