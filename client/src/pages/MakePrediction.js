import React, { useState, useEffect } from "react";
import TodaysMatch from "../components/prediction/TodaysMatch";
import DatePicker from "react-datepicker";
import classes from "./MakePrediction.module.scss";
import { addDays, subDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Whowillwin from "../components/prediction/Whowillwin";
import { getMatch } from "../Api";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Timer from "../components/prediction/Timer";

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
            selected={date}
            onChange={(date) => setDate(date)}
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
                  <div className={classes["slideRight-wrapper"]}>
                    <img
                      className={classes["slideRight"]}
                      src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAWhtfS.img?m=6&q=80"
                    />
                  </div>

                  <div className={classes["slideLeft-wrapper"]}>
                    <img
                      className={classes["slideLeft"]}
                      src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAWhtfS.img?m=6&q=80"
                    />
                  </div>

                  <Whowillwin team1={team1} team2={team2} match={match} />
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
