import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { humidityService } from "../Services";
import axios from 'axios';

function Home() {
    const [dashboard, setDashboard] = useState<boolean>(true);
    const [data, setData] = useState<boolean>(false);
    const [charts, setCharts] = useState<boolean>(true);
    const [table, setTable] = useState<boolean>(false);
    const [items, setItems] = useState([]);

    const showDashboard = () => {
        setDashboard(true);
        setData(false);
    }

    const showData = () => {
        setData(true);
        setDashboard(false);
    }

    const showCharts = () => {
        setCharts(true);
        setTable(false);
    }

    const showTable = () => {
        setTable(true);
        setCharts(false);
    }

    // useEffect(() => {
    //     humidityService.getHumidity().then(
    //       (res) => {
    //         console.log(res)
    //       }
    //     ).then(
    //       () => console.log('error')
    //     )
    //   },[items])

    useEffect(() => {
        fetch("http://109.215.14.143:3001/v1/humidity/", {   
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            mode: 'cors'
        }) 
          .then(res => res.json())
          .then(
            (res) => {
              console.log('ok ', res);
            //   setItems(res);
            },
            (error) => {
                console.log('error');
            }
          )
    }, [])
    
    return (
        <div>
            <Navbar 
                dashboard={dashboard}
                data={data}
                charts={charts}
                table={table}
                showDashboard={showDashboard}
                showData={showData}
                showCharts={showCharts}
                showTable={showTable}
            />
            {items.map(item => item)}
        </div>
    );
}

export default Home;
