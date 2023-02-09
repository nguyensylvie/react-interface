import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const GlobalCss = withStyles({
    '@global': {
        '.Mui-disabled': {
            color: '#6E987B',
        },
        '.MuiSlider-rail': {
            color: '#6E987B',
        },
        '.MuiSlider-track': {
            color: '#6E987B',
        },
    },
})(() => null);

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
        value: -20,
        label: '-20°C',
    },
    {
        value: -10,
        label: '-10°C',
    },
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 10,
        label: '10°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 30,
        label: '30°C',
    },
    {
        value: 40,
        label: '40°C',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

interface TemperatureProps {
    title: string;
    valueT: number;
}

function Temperature(props: TemperatureProps) {
    const classes = useStyles();
    const { title, valueT } = props;
    return (
        <div className={classes.root}>
            <Typography>
                {title}
            </Typography>
            <GlobalCss />
            <Slider
                className={classes.slider}
                min={-20}
                max={40}
                defaultValue={valueT}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
                disabled={true}
            />
        </div>
    );
}

export default Temperature;
