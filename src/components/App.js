import React from "react";
import Survey from "./Survey";
import "./App.css";
import "./MScreenW600.css";
import "./MScreenW500.css";
import "./MScreenW400.css";
import "./MScreenW300.css";
import DocumentationView from "./DocumentationView/DocumentationView";

export default function App() {
  return (
    <div className="App">
      <Survey/>
      {/* NOTE: Comment out DocumentationView before submission  */}
      {/* <DocumentationView /> */}
    </div>
  );
}
