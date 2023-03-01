import React from "react";
import classes from "./PredictionHistory.module.scss";

const PredictionHistory = () => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["wrapper_background"]} />
      <div className={classes["container"]}>
        <div className={classes["table"]}>
          <div className={classes["table-header"]}>
            {/* classes["header__item filter__link"] */}
            <div className={`${classes.header_item} ${classes.filter_link}`}>
              Date
            </div>
            <div className={`${classes.header_item} ${classes.filter_link}`}>
              Team
            </div>
            <div className={`${classes.header_item} ${classes.filter_link}`}>
              Win/Loss
            </div>
          </div>
          <div className={classes["table-content"]}>
            <div className={classes["table-row"]}>
              <div className={classes["table-data"]}>Tom</div>
              <div className={classes["table-data"]}>2</div>
              <div className={classes["table-data"]}>0</div>
              {/* <div className={classes["table-data"]}>1</div> */}
            </div>
            <div className={classes["table-row"]}>
              <div className={classes["table-data"]}>Tom</div>
              <div className={classes["table-data"]}>2</div>
              <div className={classes["table-data"]}>0</div>
              {/* <div className={classes["table-data"]}>1</div> */}
            </div>
            <div className={classes["table-row"]}>
              <div className={classes["table-data"]}>Tom</div>
              <div className={classes["table-data"]}>2</div>
              <div className={classes["table-data"]}>0</div>
              {/* <div className={predictionHistory["table-data"]}>1</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionHistory;
