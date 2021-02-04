import React from 'react';
import ReactDom from 'react-dom';
import LowRiskSvgIcon from "../components/SvgIcon/tick.svg";

const ThanksModal = (props) => {

  return ReactDom.createPortal(
    <>
      <div id={"thanks-modal-background"}></div>
      <div id={"thanks-modal-container"}>
        <div id={"thanks-modal"} >
          <img className={"svg-icon-large"} src={LowRiskSvgIcon} alt=""/>
          <h1 className={"survey-container__title"}>{props.tripSurveyContent.title}</h1>
          <p id={"thanks-modal__p"}>Thank you for completing your Daily Health Survey! Please
            remember to complete each day for the length of your stay
            or a maximum of 14-Days.
          </p>
          <div id={"thanks-modal__button"} onClick={props.goHome}>
            <span>Click to go back home</span>
          </div>
        </div>
      </div>
    </>
    , document.getElementById("thanks-modal-portal")
  )
}
export default ThanksModal;