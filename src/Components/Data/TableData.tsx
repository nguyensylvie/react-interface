import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    marginBottom: 30
  },
  table: {
    minWidth: 650,
  },
  fontWeight: {
    fontWeight: 'bold'
  }
});

function createData(date: string, tempExt: number, tempInt: number, humExt: number, humInt: number) {
  return { date, tempExt, tempInt, humExt, humInt };
}

const rows = [
  createData('01/12/2020', 14, 20, 30, 27),
  createData('02/12/2020', 25, 16, 24, 60),
  createData('03/12/2020', 32, 22, 67, 46),
  createData('04/12/2020', 19, 26, 49, 39),
];

function TableData() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.fontWeight}>Date</TableCell>
                <TableCell className={classes.fontWeight} align="center">T°C&nbsp;ext</TableCell>
                <TableCell className={classes.fontWeight} align="center">T°C&nbsp;int</TableCell>
                <TableCell className={classes.fontWeight} align="center">H%&nbsp;ext</TableCell>
                <TableCell className={classes.fontWeight} align="right">H%&nbsp;int</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="center">{row.tempExt}</TableCell>
                  <TableCell align="center">{row.tempInt}</TableCell>
                  <TableCell align="center">{row.humExt}</TableCell>
                  <TableCell align="right">{row.humInt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default TableData;