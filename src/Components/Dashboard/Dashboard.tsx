import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SerreDasboard from './SerreDashboard';
import CardTH from './CardTH';

const serres = [
  { id: 1, valueT: 14, valueH: 50 },
  { id: 2, valueT: 16, valueH: 20 },
  { id: 3, valueT: 20, valueH: 40 },
  { id: 4, valueT: 6,  valueH: 20 },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    today: {
      fontWeight: 'bold',
      color: '#505050',
      marginBottom: 50
    },
  }),
);

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" className={classes.today}>
        Aujourd'hui
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CardTH typeData="Temperature" title="Température extérieure" valueT={10} valueH={0}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTH typeData="Humidite" title="Humidité extérieure" valueT={0} valueH={20}/>
        </Grid>
      </Grid>
      {serres.map((serre) => (
        <SerreDasboard number={serre.id} valueT={serre.valueT} valueH={serre.valueH}/>
      ))}
    </div>
  );
}

export default Dashboard;
