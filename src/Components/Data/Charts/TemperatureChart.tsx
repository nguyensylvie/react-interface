import { Typography } from '@material-ui/core';
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: '#505050',
      marginBottom: 20
    },
  }),
);

const data = [
  {
    date: '01/12', Température: 20, amt: 2400,
  },
  {
    date: '02/12', Température: 11, amt: 2210,
  },
  {
    date: '03/12', Température: 17, amt: 2290,
  },
  {
    date: '04/12', Température: 21, amt: 2000,
  },
];

const renderLineChart = (
  <LineChart width={500} height={300} data={data} margin={{ top: 5, bottom: 5}}>
    <Line type="monotone" dataKey="Température" stroke="#6E987B"/>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
  </LineChart>
);

function TemperatureChart() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        Température intérieure
      </Typography>
      {renderLineChart}
    </div>
  );
}

export default TemperatureChart;
