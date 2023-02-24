import React , {useState, useEffect} from 'react'
import TodaysMatch from '../components/prediction/TodaysMatch'
import DatePicker from "react-datepicker";
import classes from "./MakePrediction.module.scss"
import "react-datepicker/dist/react-datepicker.css";

const MakePrediction = () => {
    const [date, setDate] = useState(new Date())
    const [team1, setTeam1] = useState(null)
    const [team2, setTeam2] = useState(null)



    useEffect(() => {
        // const res = getMatch(date)
        // console.log(res);


    }, [])
    
  return (
    <div>
        <TodaysMatch team1={team1} team2={team2}/>
        <div className={classes["selectDateBox"]}>
            <p>Select the date on which you want to see the scheduled matches : </p>
        <div className={classes["dateBox"]}>
            <label>Select Date Here : </label>
            <DatePicker selected={date} onChange={(date) => setDate(date)}/>
        </div> 
        </div>
    </div>
  )
}

export default MakePrediction