import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Temperature from './Temperature';
import Humidity from './Humidity';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    marginBottom: 30
  },
});

interface CardTHProps {
  typeData: "Temperature" | "Humidite";
  title: string;
  valueT: number;
  valueH: number;
}

function CardTH(props: CardTHProps) {
    const classes = useStyles();
    const { typeData, title, valueT, valueH } = props;
    const data = () => {
      if(typeData === "Temperature"){
        return <Temperature title={title} valueT={valueT}/>;
      } else if(typeData === "Humidite") {
        return <Humidity title={title} valueH={valueH}/>;
      }
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                {data()}
            </CardContent>
        </Card>
    );
}

export default CardTH;
