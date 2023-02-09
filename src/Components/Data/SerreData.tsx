import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TableData from './TableData';
import Charts from './Charts/Charts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6E987B',
    },
    secondary: {
        main: '#536957',
      },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    serre: {
      fontWeight: 'bold',
      color: '#505050',
      marginBottom: 20
    },
    card: {
        marginBottom: 30
    },
    btn: {
        marginBottom: 15
    },
  }),
);

interface SerreDataProps {
    number: number;
    charts: boolean;
    table: boolean;
    showCharts: () => void;
    showTable: () => void;
}

function SerreData(props: SerreDataProps) {
    const classes = useStyles();
    const { number, charts, table, showCharts, showTable } = props;
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h5" className={classes.serre}>
                Serre {number}
            </Typography>
            <Card className={classes.card}>
                <CardContent>
                    <ButtonGroup className={classes.btn} variant="contained" color="primary" aria-label="contained primary button group">
                        <Button onClick={showCharts}>Graphiques</Button>
                        <Button onClick={showTable}>Tableau</Button>
                    </ButtonGroup>
                    {charts && <Charts />}
                    {table && <TableData />}
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default SerreData;
