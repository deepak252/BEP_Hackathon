import React, { useEffect } from "react";
import classes from "./Whowillwin.module.scss";
import Button from "react-bootstrap/Button";
import { voteMatch } from "../../Api";
import { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useContext } from "react";
import UserContext from "../../utils/context";

const Whowillwin = (props) => {
  const { team1, team2, match } = props;
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);

  const onSubmithandler = async (event) => {
    props.setMessage(null);
    event.preventDefault();

    if (!selectedTeam) {
      alert("Please select a team!");
      return;
    }

    try {
      setIsLoading(true);
      const res = await voteMatch(selectedTeam, match);
      userContext.setIsAlreadyVoted(true);
      props.setMessage("Thanks for voting!");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const selectTeam = (event) => setSelectedTeam(event.target.value);

  return (
    <div>
      {props.message ? (
        <h2>{props.message}</h2>
      ) : (
        <div className={classes["who_will_win_box"]}>
          <h4 className={classes.title}>Who Will Win ?</h4>
          <form
            className={classes["prediction_form"]}
            onSubmit={onSubmithandler}
          >
            <div className={classes["team_option_selection"]}>
              <label className={classes["rad-label"]}>
                <input
                  type="radio"
                  className={classes["rad-input"]}
                  name="rad"
                  value={team1._id}
                  onChange={selectTeam}
                />
                <div className={classes["rad-design"]}></div>
                <div className={classes["rad-text"]}>{team1.name}</div>
              </label>

              <label className={classes["rad-label"]}>
                <input
                  type="radio"
                  className={classes["rad-input"]}
                  name="rad"
                  value={team2._id}
                  onChange={selectTeam}
                />
                <div className={classes["rad-design"]}></div>
                <div className={classes["rad-text"]}>{team2.name}</div>
              </label>
            </div>

            <div className={classes["voteBtn"]}>
              <Button
                type="submit"
                className={classes.button}
                variant="primary"
              >
                {isLoading ? "Loading..." : "Vote"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Whowillwin;
