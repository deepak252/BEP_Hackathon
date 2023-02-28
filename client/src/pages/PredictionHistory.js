import React from "react";
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