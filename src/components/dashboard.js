import React, { useState, useEffect } from 'react';
import Chart from './chart';
import myData from '../jsondata.json';

function Dashboard() {
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [arr3, setArr3] = useState([]);
    const [arr4, setArr4] = useState([]);

    useEffect(() => {
        let topic = [],
            likelihood = [],
            intensity = [],
            relevance = [];
        for (let i = 1; i < 100; i++) {
            if (myData[i].topic && myData[i].topic !== " ") {
                topic.push(myData[i].topic)
                likelihood.push(myData[i].likelihood)
                intensity.push(myData[i].intensity)
                relevance.push(myData[i].relevance)
            }
        }
        setArr1(topic)
        setArr2(likelihood)
        setArr3(intensity)
        setArr4(relevance)
    }, []);

    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        div align = "center"
        className = "col-lg-12" >
        <
        Chart topic = { arr1 }
        likelihood = { arr2 }
        intensity = { arr3 }
        relevance = { arr4 }
        /> <
        /div> <
        /div> <
        /div>
    );
}

export default Dashboard;