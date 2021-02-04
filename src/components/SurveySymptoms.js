import React, {useMemo} from 'react';

const SurveySymptoms = (props) => {

  const surveySection = useMemo(()=>{
    return(
      <>
      <p className={"covid-form-p"}>{props.tripSurveyQuestions.symptoms.label}</p>
        <div id={"symptoms-inputs"}>
          <ul id={"symptoms-inputs__ul"} >
            <li>
              <label className={`checkbox-label`} htmlFor={"symptoms-inputs-fever"}>
                <input
                  id={"symptoms-inputs-fever"}
                  name={"symptoms-inputs-fever"}
                  type={"checkbox"}
                  required
                  onChange={props.handleInputChange}
                />
                <span className="checkmark"></span>
                Fever
              </label>
            </li>
            <li>
              <label className={`checkbox-label`} htmlFor={"symptoms-inputs-chills"}>
                <input
                  id={"symptoms-inputs-chills"}
                  name={"symptoms-inputs-chills"}
                  type={"checkbox"}
                  required
                  onChange={props.handleInputChange}
                />
                <span className="checkmark"></span>
                Chills
              </label>
            </li>
            <li>
              <label className={`checkbox-label`} htmlFor={"symptoms-inputs-dry-cough"}>
                <input
                  id={"symptoms-inputs-dry-cough"}
                  name={"symptoms-inputs-dry-cough"}
                  type={"checkbox"}
                  required
                  onChange={props.handleInputChange}
                />
                <span className="checkmark"></span>
                Dry cough
              </label>
            </li>
            <li>
              <label className={`checkbox-label`} htmlFor={"symptoms-inputs-shortness"}>
                <input
                  id={"symptoms-inputs-shortness"}
                  name={"symptoms-inputs-shortness"}
                  type={"checkbox"}
                  required
                  onChange={props.handleInputChange}
                />
                <span className="checkmark"></span>
                Shortness of breath of difficulty breathing
              </label>
            </li>
            <li>
              <label className={`checkbox-label`} htmlFor={"symptoms-inputs-fatigue"}>
                <input
                  ref={props.fatigue}
                  id={"symptoms-inputs-fatigue"}
                  name={"symptoms-inputs-fatigue"}
                  type={"checkbox"}
                  required
                  onChange={(e)=>{props.handleInputChange(e)}}
                />
                <span className="checkmark"></span>
                Fatigue
              </label>
            </li>
            <ul id={"symptoms-inputs__ul__ul"}>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-shortness-2"}>
                  <input
                    ref={props.shortness}
                    id={"symptoms-inputs-shortness-2"}
                    name={"symptoms-inputs-shortness-2"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                />
                  <span className="checkmark"></span>
                  Shortness of breath of difficulty breathing
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-fatigue-2"}>
                  <input
                    id={"symptoms-inputs-fatigue-2"}
                    name={"symptoms-inputs-fatigue-2"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Fatigue
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-muscle"}>
                  <input
                    id={"symptoms-inputs-muscle"}
                    name={"symptoms-inputs-muscle"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Muscle and body aches
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-headache"}>
                  <input
                    id={"symptoms-inputs-headache"}
                    name={"symptoms-inputs-headache"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Headache
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-loss-of-taste"}>
                  <input
                    id={"symptoms-inputs-loss-of-taste"}
                    name={"symptoms-inputs-loss-of-taste"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Loss of taste
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-loss-of-smell"}>
                  <input
                    id={"symptoms-inputs-loss-of-smell"}
                    name={"symptoms-inputs-loss-of-smell"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Loss of smell
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-sore-throat"}>
                  <input
                    id={"symptoms-inputs-sore-throat"}
                    name={"symptoms-inputs-sore-throat"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Sore throat
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-congestion"}>
                  <input
                    id={"symptoms-inputs-congestion"}
                    name={"symptoms-inputs-congestion"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Congestion or runny nose
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-nausea"}>
                  <input
                    id={"symptoms-inputs-nausea"}
                    name={"symptoms-inputs-nausea"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Nausea
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-vomiting"}>
                  <input
                    id={"symptoms-inputs-vomiting"}
                    name={"symptoms-inputs-vomiting"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Vomiting
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-diarrhea"}>
                  <input
                    id={"symptoms-inputs-diarrhea"}
                    name={"symptoms-inputs-diarrhea"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Diarrhea
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-abdominal"}>
                  <input
                    id={"symptoms-inputs-abdominal"}
                    name={"symptoms-inputs-abdominal"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  Abdominal pain
                </label>
              </li>
              <li>
                <label className={"checkbox-label"} htmlFor={"symptoms-inputs-none-of"}>
                  <input
                    id={"symptoms-inputs-none-of"}
                    name={"symptoms-inputs-none-of"}
                    type={"checkbox"}
                    required
                    onChange={(e)=>{props.handleInputChange(e)}}
                    className={"nested-checkbox"}
                  />
                  <span className="checkmark"></span>
                  None of the above
                </label>
              </li>
            </ul>
          </ul>
        </div>
    </>
    )
  },[props.fatigueState])

  return (
    surveySection
  )
}

export default SurveySymptoms;