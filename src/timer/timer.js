import React from "react";
import { useState, useEffect } from 'react'

export function Timer() {
    const [start, setStart] = useState(true);
    const [time, setTime] = useState(0);
    const [clear, setClear] = useState(false); 

    useEffect(() => {
        const timerID = setInterval(() => {
            if (start === true) {
                setTime(time + 1);
            } 
        }, 1000);

        return () => clearInterval(timerID)
    }, [time])

    useEffect(() => {
        if (clear === true) {
            setStart(false);
            setTime(0);
            setClear(false);
        }
    }, [time])

    return (
        <div>
            <p>Time: {time}</p>
            <br/>
            <button onClick={() => setStart(true)}>Start</button>
            <button onClick={() => setStart(false)}>Stop</button>
            <button onClick={() => setClear(true)}>Clear</button>
        </div>
    )
}