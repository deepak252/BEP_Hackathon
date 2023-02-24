import React from 'react'
import classes from "./Whowillwin.module.scss"
import Button from 'react-bootstrap/Button';

const Whowillwin = () => {
 
    const onSubmithandler = (event) => {    
        event.preventDefault();


    }
 
    return (
    <div className={classes["who_will_win_box"]}>
    <h4 className={classes.title}>
        Who Will Win ?
    </h4>
    <form className={classes["prediction_form"]} onSubmit={onSubmithandler}>
        <div className={classes["team_option_selection"]}>
            <div className={classes["team_option"]}>
                <label>Team name 1</label>
                <input type="radio" name='teamOption' value="id1"/>
            </div>

            <div className={classes["team_option"]}>
                <label>Team name 2</label>
                <input type="radio" name='teamOption' value="id1"/>
            </div>
        </div>

        <div className={classes["voteBtn"]}>
        <Button variant="primary">Vote</Button>
        </div>
    </form>
    </div>
  )
}

export default Whowillwin