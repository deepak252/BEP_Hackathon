import React, { useState, useEffect, useContext } from "react";
import TodaysMatch from "../components/prediction/TodaysMatch";
import DatePicker from "react-datepicker";
import classes from "./MakePrediction.module.scss";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Whowillwin from "../components/prediction/Whowillwin";
import { getMatch } from "../Api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Timer from "../components/prediction/Timer";
import UserContext from "../utils/context";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MakePrediction = () => {
  const [date, setDate] = useState(new Date());
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [match, setMatch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const userContext = useContext(UserContext);
  const [voteThanksMessage, setVoteThanksMessage] = useState(null);

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        backgroundColor: "rgb(44,67,125)",
        border: "0",
        color: "white",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  useEffect(() => {
    const getRequiredMatch = async () => {
      setIsLoading(true);
      const res = await getMatch(new Date(date));

      if (res.status !== 200) {
        alert("Something went wrong!");
        return;
      }

      setTeam1(res.data.data.allMatches[0].team1);
      setTeam2(res.data.data.allMatches[0].team2);
      setMatch(res.data.data.allMatches[0]._id);

      if (res?.data?.data?.timeRemaining) {
        setTimeRemaining(res.data.data.timeRemaining);
      } else {
        setTimeRemaining(0);
      }

      userContext.setIsAlreadyVoted(res.data.data.prediction);

      setIsLoading(false);
    };

    getRequiredMatch();
  }, [date]);

  let sup = "th";
  if (date.getDate() % 10 == 1) {
    sup = "st";
  } else if (date.getDate() % 10 == 2) {
    sup = "nd";
  } else if (date.getDate() % 10 == 3) {
    sup = "rd";
  }

  return (
    <div className={classes["ipl_cover_photo"]}>
      <div className={classes["wrapper_background"]} />
      <div className={classes["wrapper"]}>
        <div className={classes["selectDateBox"]}>
          <p>
            Select the date on which you want to see the scheduled matches :{" "}
          </p>
          <DatePicker
            customInput={<ExampleCustomInput />}
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            includeDateIntervals={[
              {
                start: subDays(new Date("24 Feb 2023"), 0),
                end: addDays(new Date("24 Feb 2023"), 11),
              },
            ]}
          />
        </div>
        <div className={classes["today_match_title"]}>
          {date.getDate() === new Date().getDate() ? (
            <h2 style={{ color: "white" }}>Today's Match</h2>
          ) : (
            <h2 style={{ color: "white" }}>
              Match on <span>{date.getDate()}</span>
              <sup>{sup}</sup> <span>{months[date.getMonth()]}</span>
            </h2>
          )}
        </div>
        <div className={classes["match-description"]}>
          {isLoading || (!team1 && !team2) ? (
            <div className={classes["spinner-wrapper"]}>
              <LoadingSpinner />
            </div>
          ) : (
            <div style={{ position: "relative" }}>
              <TodaysMatch date={date} team1={team1} team2={team2} />
              {timeRemaining == 0 ? (
                <h2 className={classes["match-ended-text"]}>
                  Match has already ended
                </h2>
              ) : (
                <div>
                  <Timer timeRemaining={timeRemaining} />
                  <div
                    style={{ backgroundColor: team1.teamColor }}
                    className={classes["slideRight-wrapper"]}
                  >
                    <img
                      className={classes["slideRight"]}
                      src={team1.captainImg}
                    />
                  </div>

                  <div
                    style={{ backgroundColor: team2.teamColor }}
                    className={classes["slideLeft-wrapper"]}
                  >
                    <img
                      className={classes["slideLeft"]}
                      src={team2.captainImg}
                    />
                  </div>

                  {userContext.isAlreadyVoted ? (
                    <h2
                      className={classes["already_voted_title"]}
                      style={{ color: "white" }}
                    >
                      {voteThanksMessage
                        ? "Thanks for voting!"
                        : "You've Already Voted!"}
                    </h2>
                  ) : (
                    <Whowillwin
                      team1={team1}
                      team2={team2}
                      match={match}
                      setMessage={setVoteThanksMessage}
                      message={voteThanksMessage}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakePrediction;
