import React , {useState, useEffect} from 'react'
import TodaysMatch from '../components/prediction/TodaysMatch'
import DatePicker from "react-datepicker";
import classes from "./MakePrediction.module.scss"
import { addDays , subDays} from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import Whowillwin from '../components/prediction/Whowillwin';
import { getMatch } from '../Api';

const MakePrediction = () => {
    const [date, setDate] = useState(new Date())
    const [team1, setTeam1] = useState(null)
    const [team2, setTeam2] = useState(null)


    useEffect(() => {
        const res = getMatch(date)
        console.log(res);

    }, [date])
    
  return (
    <div>
        <TodaysMatch team1={team1} team2={team2}/>
        <Whowillwin/>
        <div className={classes["selectDateBox"]}>
            <p>Select the date on which you want to see the scheduled matches : </p>
        <div className={classes["dateBox"]}>
            <label>Select Date Here : </label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} includeDateIntervals={[{start: subDays(new Date(), 1), end: addDays(new Date(), 11) }]}/>
        </div> 
        </div>
    </div>
  )
}

export default MakePrediction