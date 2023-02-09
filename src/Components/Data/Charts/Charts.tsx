import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import SplitButton from './SplitButton';

function Charts() {
  return (
    <div>
        <Grid container spacing={3}>
            <SplitButton />
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <TemperatureChart />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <HumidityChart />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}

export default Charts;