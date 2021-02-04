import React from 'react';
import HighRiskSvgIcon from "../components/SvgIcon/warning.svg";
import LowRiskSvgIcon from "../components/SvgIcon/tick.svg";

const RiskModal = (props) => {

  return (
    <>
      <div id={"risk-modal-background"}></div>
      <div id={"risk-modal"}>
        <h1>Your Covid-19 Risk Level Is</h1>
        <h1>{props.riskLevelState}</h1>
        {props.riskLevelState === "High" ?
          <img className={"svg-icon"} src={HighRiskSvgIcon} alt=""/>
        : null}
        {props.riskLevelState === "Low" ?
          <img className={"svg-icon"} src={LowRiskSvgIcon} alt=""/>
        : null}
        <div id={"risk-modal-button"} onClick={props.openThanksModal}>
          <span>I Understand</span>
        </div>
      </div>
    </>
  )
}
export default RiskModal;