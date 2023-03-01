import React, {useEffect, useState} from 'react'
import classes from "./Timer.module.scss"

const Timer = (props) => {
    
    const [timeLeftInSeconds, setTimeLeftInSeconds] = useState(Number(props.timeRemaining))

    useEffect(() => {
        setTimeout(() => {
            if (timeLeftInSeconds > 0){
                setTimeLeftInSeconds((prevTime) => prevTime - 1)
            }
        }, 1000);

    }, [timeLeftInSeconds])

    let d = Math.floor(timeLeftInSeconds / (3600 * 24));
    let h = Math.floor(timeLeftInSeconds % (3600 * 24) / 3600);
    let m = Math.floor(timeLeftInSeconds % 3600 / 60);
    let s = Math.floor(timeLeftInSeconds % 60);

  return (
    <div className={classes.timer}>
        <div className={classes.timeGroup}>
            <div className={classes.time}><p>{d}</p></div>
            <div className={classes.label}>Days</div>
        </div>
        <div className={classes.timeGroup}>
            <div className={classes.time}><p>{h}</p></div>
            <div className={classes.label}>Hours</div>
        </div>
        <div className={classes.timeGroup}>
            <div className={classes.time}><p>{m}</p></div>
            <div className={classes.label}>Minutes</div>
        </div>
        <div className={classes.timeGroup}>
            <div className={classes.time}><p>{s}</p></div>
            <div className={classes.label}>Seconds</div>
        </div>
    </div>
  )
}

export default Timer