import React from 'react'
import classes from "./TodaysMatch.module.scss"

const TodaysMatch = (props) => {
  const { team1, team2, date } = props;

  return (
    <div className={classes.wrapper}>
        <div className={classes.main}>
          <img src={team1.imgUrl} alt="team1"  className={classes["team1_img"]}/>
          <div className={classes["vs_img_block"]}>
            <img src="/images/vs.webp" alt="vs_image" />
          </div>
          <img src={team2.imgUrl}  alt="team2" className={classes["team2_img"]}/>
        </div>
    </div>
  )
}

export default TodaysMatch 