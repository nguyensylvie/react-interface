import React from 'react';
import SerreData from './SerreData';

const serres = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

interface DataProps {
  charts: boolean;
  table: boolean;
  showCharts: () => void;
  showTable: () => void;
}

function Data(props: DataProps) {
  const { charts, table, showCharts, showTable } = props;
  return (
    <div>
      {serres.map((serre) => (
        <SerreData number={serre.id} charts={charts} table={table} showCharts={showCharts} showTable={showTable}/>
      ))}
    </div>
  );
}

export default Data;
