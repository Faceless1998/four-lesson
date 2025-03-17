import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect( () => {
        const interval = setInterval( () => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    })

    const formattedTime = time.toLocaleTimeString( "en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    } )


    return (
        <div style={ styles.container }>
            <h1>Digital Clock</h1>
            <p style={styles.clock}> {formattedTime} </p>
        </div>
    )
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
    },
    clock: {
        fontSize:"48px",
        fontWeight: "300",
        backgroundColor: "#000",
        color:"#0f0",
        padding:"20px",
        borderRadius: "10px",
        display:"inline-block",
        fontFamily: "alarm clock"
    }
}


export default DigitalClock;