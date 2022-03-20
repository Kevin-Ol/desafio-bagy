import React from 'react';

function ChartHeader() {
  return (
    <div className="chart-header">
      <h2>Total de faturamento mensal</h2>

      <div>
        <span>JULHO 2020</span>
        <div>
          <div className="current-month-line">
            <div />
            <span>Este mês</span>
          </div>

          <div className="previous-month-line">
            <div />
            <span>Mês passado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartHeader;
