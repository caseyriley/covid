import React from 'react';
import { FetchTravelerData } from "../helpers/data.js";

class TravelerInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const userData = FetchTravelerData();
    this.setState({user: userData})
  }

  render() {
    
    return (
      <>
        <h1 className={"travel-info-h1"} >Travel Information</h1>
        <span className={"traveler-info-cat-1"}>Name</span>
        <div>
          <span className={"traveler-info-text"}>{this.state.user.firstName}</span>
          <span className={"traveler-info-names"}>{this.state.user.middleName}</span>
          <span className={"traveler-info-names"}>{this.state.user.lastName}</span>
        </div>
        <span className={"traveler-info-cat"}>Account ID</span>
        <span className={"traveler-info-text"}>{this.state.user.accountID}</span>
        <span className={"traveler-info-cat"}>Trip ID</span>
        <span className={"traveler-info-text"}>{this.state.user.tripID}</span>
      </>
    )
  }
}

export default TravelerInfo;