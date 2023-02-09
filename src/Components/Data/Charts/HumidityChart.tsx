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
    date: '01/12', Humidité: 30, amt: 2400,
  },
  {
    date: '02/12', Humidité: 44, amt: 2210,
  },
  {
    date: '03/12', Humidité: 29, amt: 2290,
  },
  {
    date: '04/12', Humidité: 50, amt: 2000,
  },
];

const renderLineChart = (
  <LineChart width={500} height={300} data={data} margin={{ top: 5, bottom: 5}}>
      <Line type="monotone" dataKey="Humidité" stroke="#6E987B"/>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
  </LineChart>
);

function HumidityChart() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        Humidité intérieure
      </Typography>
      {renderLineChart}
    </div>
  );
}

export default HumidityChart;
