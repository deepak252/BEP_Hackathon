import React from 'react'
import classes from "./TodaysMatch.module.scss"

const TodaysMatch = () => {
  return (
    <div className={classes.wrapper}>
        <h2 className={classes["today_match_title"]}>Today's Match</h2>
        <div className={classes.main}>
            <img/>
            <img src='/images/vs.jpeg' alt='vs image'/>
            <img/>
        </div>
    </div>
  )
}

export default TodaysMatch 