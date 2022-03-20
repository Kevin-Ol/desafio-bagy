import React, { useMemo } from 'react';
import {
  AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip,
} from 'recharts';
import UseStores from '../hooks/UseStores';
import ChartHeader from './ChartHeader';
import CustomTooltip from './CustomTooltip';

function Chart() {
  const { currentMonthRevenues, previousMonthRevenues, loading } = UseStores();

  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }

  const chartData = useMemo(() => currentMonthRevenues.daily.map((current, index) => ({
    day: current.day,
    current: current.value,
    previous: previousMonthRevenues.daily[index].value,
  })));

  return (
    <div>
      <ChartHeader />
      <AreaChart
        width={800}
        height={360}
        data={chartData}
        margin={{
          top: 30,
        }}
      >
        <CartesianGrid stroke="#DDD" vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="previous"
          stroke="#DFE0EB"
          strokeWidth={2}
          fill="#FFF"
          fillOpacity={0.01}
          dot={false}
          activeDot={false}
        />
        <Area
          type="monotone"
          dataKey="current"
          stroke="#FC3C8D"
          strokeWidth={2}
          fill="#FFF"
          fillOpacity={0.01}
          activeDot={{
            stroke: '#FC3C8D', strokeWidth: 5, r: 6, fill: '#FFF',
          }}
        />
        <XAxis padding={{ right: 150 }} tick={false} tickLine={false} axisLine={false} />
        <YAxis
          orientation="right"
          axisLine={false}
          type="number"
          tick={{ fill: '#9FA2B4' }}
          tickLine={false}
          strokeWidth={1}
          domain={[0, (dataMax) => (Math.floor(dataMax / 10000) * 10000 + 10000)]}
          tickCount={7}
          tickFormatter={(tick) => tick / 1000}
          tickMargin={-30}
          dy={-12}
        />
      </AreaChart>
    </div>
  );
}

export default Chart;
