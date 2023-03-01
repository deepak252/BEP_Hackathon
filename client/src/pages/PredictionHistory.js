import React from "react";
<<<<<<< HEAD
import predictionHistory from "./PredictionHistory.module.scss"

const PredictionHistory =()=>{
    return <div className={predictionHistory["container"]}>
	
	<div className={predictionHistory["table"]}>
		<div className={predictionHistory["table-header"]}>
        {/* predictionHistory["header__item filter__link"] */}
			<div className={`${predictionHistory.header_item} ${predictionHistory.filter_link}`}>
				Date</div>
                <div className={`${predictionHistory.header_item} ${predictionHistory.filter_link}`}>
				Team</div>
                <div className={`${predictionHistory.header_item} ${predictionHistory.filter_link}`}>
				Win/Loss</div>
                {/* <div className={`${predictionHistory.header_item} ${predictionHistory.filter_link}`}>
				Name</div> */}
		</div>
		<div className={predictionHistory["table-content"]}>	
			<div className={predictionHistory["table-row"]}>		
				<div className={predictionHistory["table-data"]}>Tom</div>
				<div className={predictionHistory["table-data"]}>2</div>
				<div className={predictionHistory["table-data"]}>0</div>
				{/* <div className={predictionHistory["table-data"]}>1</div> */}
			</div>
			<div className={predictionHistory["table-row"]}>		
				<div className={predictionHistory["table-data"]}>Tom</div>
				<div className={predictionHistory["table-data"]}>2</div>
				<div className={predictionHistory["table-data"]}>0</div>
				{/* <div className={predictionHistory["table-data"]}>1</div> */}
			</div>
            <div className={predictionHistory["table-row"]}>		
				<div className={predictionHistory["table-data"]}>Tom</div>
				<div className={predictionHistory["table-data"]}>2</div>
				<div className={predictionHistory["table-data"]}>0</div>
				{/* <div className={predictionHistory["table-data"]}>1</div> */}
			</div>
		</div>	
	</div>
</div>
}

export default PredictionHistory
=======
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
>>>>>>> d83bbe86822bea42f37e9c25a39b2f69d5dc15ce
