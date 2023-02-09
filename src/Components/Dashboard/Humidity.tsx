import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
      color: '#505050'
    },
    slider: {
        marginTop: 40,
        marginLeft: 15
    },
  }),
);

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 20,
        label: '20%',
    },
    {
        value: 40,
        label: '40%',
    },
    {
        value: 60,
        label: '60%',
    },
    {
        value: 80,
        label: '80%',
    },
    {
        value: 100,
        label: '100%',
    },
];

function valuetext(value: number) {
    return `${value}%`;
}

interface HumidityProps {
    title: string;
    valueH: number;
}

function Humidity(props: HumidityProps) {
    const classes = useStyles();
    const { title, valueH } = props;
    return (
        <div className={classes.root}>
            <Typography>
                {title}
            </Typography>
            <Slider
                className={classes.slider}
                min={0}
                max={100}
                defaultValue={valueH}
                getAriaValueText={valuetext}
                marks={marks}
                valueLabelDisplay="on"
                disabled={true}
            />
        </div>
    );
}

export default Humidity;
