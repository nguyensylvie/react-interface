import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardTH from './CardTH';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    serre: {
      fontWeight: 'bold',
      color: '#505050',
      marginBottom: 20
    },
  }),
);

interface SerreDasboardProps {
    number: number;
    valueT: number;
    valueH: number;
}

function SerreDasboard(props: SerreDasboardProps) {
    const classes = useStyles();
    const { number, valueT, valueH } = props;
    return (
        <div>
            <Typography variant="h6" className={classes.serre}>
                Serre {number}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <CardTH typeData="Temperature" title="Température intérieure" valueT={valueT} valueH={valueH}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardTH typeData="Humidite" title="Humidité intérieure"valueT={valueT} valueH={valueH}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default SerreDasboard;
