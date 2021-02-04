import React, {useState, useRef} from "react";
import { isConstructorDeclaration } from "typescript";
import { tripSurveyContent, tripSurveyQuestions } from "../helpers/content";


import TravelerInfo from "./TravelerInfo";
import SurveySymptoms from "./SurveySymptoms";
import RiskModal from "./RiskModal";
import ThanksModal from "./ThanksModal";

const Survey = () => {
  const [inputState, setInputState] = useState({"symptoms-inputs-shortness-2": false});
  const [errorState, setErrorState] = useState({});
  const [errorMessage, setErrorMessageState] = useState(false);
  const [riskModalState, setRiskModalState] = useState(false);
  const [thanksModalState, setThanksModalState] = useState(false);
  const [riskLevelState, setRiskLevelState] = useState();
  const fatigue = useRef();
  const shortness = useRef();
  const [fatigueState, setFatigueState] = useState(1);

  const commit = useRef();
  const travelerName = useRef();
  const closeContact = useRef();
  const certifySigns = useRef();
  const abideHealthMeasures = useRef();
 

  function checkFatigue(e){
    const target = e.target;
    if(target.checked){
      const keys = {
        "symptoms-inputs-shortness-2": true,
        "symptoms-inputs-fatigue-2": true,
        "symptoms-inputs-muscle": true,
        "symptoms-inputs-headache": true,
        "symptoms-inputs-loss-of-taste": true,
        "symptoms-inputs-loss-of-smell": true,
        "symptoms-inputs-sore-throat": true,
        "symptoms-inputs-congestion": true,
        "symptoms-inputs-nausea": true,
        "symptoms-inputs-vomiting": true,
        "symptoms-inputs-diarrhea": true,
        "symptoms-inputs-abdominal": true,
        "symptoms-inputs-symptoms-inputs-none-of": true,
      }

      for (let k in inputState){
        if (keys[k]){
          fatigue.current.checked = true;
        } 
      }

    } 
  }

  function handleInputChange(e) {

    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const prev = inputState;
    setInputState({
      ...prev,
      [name]: value
    });

    const keys = {
      "symptoms-inputs-shortness-2": true,
      "symptoms-inputs-fatigue-2": true,
      "symptoms-inputs-muscle": true,
      "symptoms-inputs-headache": true,
      "symptoms-inputs-loss-of-taste": true,
      "symptoms-inputs-loss-of-smell": true,
      "symptoms-inputs-sore-throat": true,
      "symptoms-inputs-congestion": true,
      "symptoms-inputs-nausea": true,
      "symptoms-inputs-vomiting": true,
      "symptoms-inputs-diarrhea": true,
      "symptoms-inputs-abdominal": true,
      "symptoms-inputs-symptoms-inputs-none-of": true,
    }

    if (keys[e.target.name]){
      checkFatigue(e)
    }

    if (e.target.checked === false && e.target.name === "symptoms-inputs-fatigue") {
      let clist = document.getElementsByClassName("nested-checkbox");
      for (let i = 0; i < clist.length; i ++) { 
        clist[i].checked = false; 
      }
    }
    console.log("inputState",inputState)
  
  }

  function handleSubmit(e){
    e.preventDefault();

    const errorObject = {};
    let errorBool = false;

    if (commit.current.checked === false ){ //
      errorObject["commit"] = true;
      errorBool = true;
    } 

    if (travelerName.current.checked === false){ //
      errorObject["traveler-name"] = true;
      errorBool = true;
    } 

    if (closeContact.current.checked === true) {
    } else if (closeContact.current.checked === false) {
    } else {
      errorObject["close-contact"] = true;
      errorBool = true;
    }

    if (closeContact.current.checked === false) {
    } else if (closeContact.current.checked === true) {
    } else {
      errorObject["close-contact"] = true;
      errorBool = true;
    }

    if (certifySigns.current.checked === true){
    } else if (certifySigns.current.checked === false) {
    } else {
      errorObject["certify-signs"] = true;
      errorBool = true;
    }
  
    if (abideHealthMeasures.current.checked === true){
    } else if (abideHealthMeasures.current.checked === false){
    } else {
      errorObject["abide-health-measures"] = true;
      errorBool = true;
    }
 
    setErrorState(errorObject);
    if (errorBool === true){
      setErrorMessageState(true);
    } else {
      setErrorMessageState(false);
      setRiskModalState(true);
    }
    let riskLevel = "";
    if (inputState["close-contact"] === "yes"){
      riskLevel = "High";
    } else if (inputState["certify-signs"] === "no"){
      riskLevel = "High";
    } else if (inputState["symptoms-inputs-fever"] === "true"){
      riskLevel = "High";
    } else if (inputState["symptoms-inputs-chills"] === "true"){
      riskLevel = "High";
    } else if (inputState["symptoms-inputs-dry-cough"] === "true"){
      riskLevel = "High";
    } else if (inputState["symptoms-inputs-shortness"] === "true"){
      riskLevel = "High";
    } else if (inputState["symptoms-inputs-fatigue"] === "true"){
      riskLevel = "High";
    } else {
      riskLevel = "Low";
    }
    setRiskLevelState(riskLevel);
  }

  function openThanksModal(){
    setRiskModalState(false);
    setThanksModalState(true);
  }

  function goHome(){
    const elements = document.getElementsByTagName("input");
    let clist = document.getElementsByTagName("input");
    for (let i = 0; i < clist.length; i ++) { 
      clist[i].checked = false; 
    }
    setInputState({});
    setErrorState({});
    setRiskLevelState(null);
    setThanksModalState(false);
  }

  return (
    <>
    <div id={"survey-container"}>
      <h1 className={"survey-container__title"}>{tripSurveyContent.title}</h1>
      <h1 id={"survey-container__subtitle"}>{tripSurveyContent.sub_title}</h1>
      <p className={"survey-p"}>{tripSurveyContent.info_parapgraphs[0]}</p>
      <p className={"survey-p"}>{tripSurveyContent.info_parapgraphs[1]}</p>

      <form
        id={"covid-form"}
        name={"covid-form"}
      >

        <label className={`checkbox-label checkbox-c ${errorState["commit"] ? "required-input" : ""}`} htmlFor={"commit"}>
          <input 
            ref={commit}
            name={"commit"} 
            id={"commit"} 
            type={"checkbox"} 
            required
            onChange={handleInputChange}
          />
          <span className="checkmark"></span>
          {tripSurveyContent.commitLabel}
        </label>

        <TravelerInfo />

        <label className={`checkbox-label checkbox-c margin-top ${errorState["traveler-name"] ? "required-input" : ""}`} htmlFor={"traveler-name"}>
          <input
            ref={travelerName}
            name={"traveler-name"}
            id={"traveler-name"}
            value={""}
            type={"checkbox"}
            required
            onChange={handleInputChange}
          />
          <span className="checkmark"></span>
          {tripSurveyContent.verifyTravelerInformatiionLabel}
        </label>
      

        <p className={"covid-form-p"}>{tripSurveyQuestions.closeContact.label}</p>
        <div className={`radio-c ${errorState["close-contact"] ? "required-input" : ""}`} >
        <label className={`radio-label`} htmlFor={"close-contact-yes"}>
          <input
              ref={closeContact}
              name={"close-contact"}
              id={"close-contact"}
              type={"radio"}
              required
              value={"yes"}
              id={"close-contact-yes"}
              // onChange={handleInputChange}
              onChange={()=>{console.log(closeContact.current.checked)}}
            />
            <span className="radio-check"></span>
            Yes
          </label>
          
          <label className={`radio-label`} htmlFor={"close-contact-no"}>
            <input
              // ref={closeContactN}
              name={"close-contact"}
              type={"radio"}
              required
              value={"no"}
              id={"close-contact-no"}
              // onChange={handleInputChange}
              onChange={()=>{console.log(closeContact.current.checked)}}
            />
            <span className="radio-check"></span>
            No
          </label>

        </div>
        
        <SurveySymptoms tripSurveyQuestions={tripSurveyQuestions}
        handleInputChange={handleInputChange} fatigue={fatigue}
        fatigueState={fatigueState} 
        shortness={shortness}
        />

        <p className={"covid-form-p"}>{tripSurveyQuestions.certifySigns.label}</p>
        <div className={`radio-c ${errorState["certify-signs"] ? "required-input" : ""}`} >
          <label className={`radio-label`} htmlFor={"certify-signs-yes"}>
            <input
              ref={certifySigns}
              name={"certify-signs"}
              type={"radio"}
              required
              value={"yes"}
              id={"certify-signs-yes"}
              onChange={handleInputChange}
            />
            <span className="radio-check"></span>
            Yes
          </label>
        
          <label className={"radio-label"} htmlFor={"certify-signs-no"}>
            <input
              name={"certify-signs"}
              type={"radio"}
              required
              value={"no"}
              id={"certify-signs-no"}
              onChange={handleInputChange}
            />
            <span className="radio-check"></span>
            No
          </label>

        </div>

        <p className={"covid-form-p"}>{tripSurveyQuestions.abideHealthMeasures.label}</p>
        <div className={`radio-c ${errorState["abide-health-measures"] ? "required-input" : ""}`} >

          <label className={"radio-label"} htmlFor={"abide-health-yes"}>
            <input
              ref={abideHealthMeasures}
              name={"abide-health-measures"}
              type={"radio"}
              required
              value={"yes"}
              id={"abide-health-yes"}
              onChange={handleInputChange}
            />
            <span className="radio-check"></span>
            Yes
          </label>

          <label className={"radio-label"} htmlFor={"abide-health-no"}>
            <input
              className={"survey-radio"}
              name={"abide-health-measures"}
              type={"radio"}
              required
              value={"no"}
              id={"abide-health-no"}
              onChange={handleInputChange}
            />
            <span className="radio-check"></span>
            No
          </label>

        </div>

        {errorMessage ? 
        <div className={"red-required"}>
          <p >
          Make sure to check all required boxes 
          above before submitting the form. 
          </p>
        </div>
        : null}

        <input onClick={handleSubmit} id={"covid-survey-submit"} type={"submit"} value={"Submit"} form={"covid-form"} />
       
      </form>
    </div>
    {riskModalState ? 
      <RiskModal openThanksModal={openThanksModal} riskLevelState={riskLevelState} />
    : null}

    {thanksModalState ?
      <ThanksModal tripSurveyContent={tripSurveyContent} goHome={goHome}/>
    : null}
    </>
  );
};

export default Survey;
