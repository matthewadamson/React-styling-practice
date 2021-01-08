import React from "react";
import ReactDOM from "react-dom";

const custStyle = {
  color: "purple",
  fontSize: "25px",
  border: "3px solid green"
};

Date.now();
var time = new Date();
var time1 = time.getHours();

var timeStyle = "Day";

if (time1 > 0 && time1 < 12) {
  timeStyle = "Morning";
  style = { color: "green" };
} else if (time1 > 12 && time1 < 18) {
  timeStyle = "Afternoon";
  style = { color: "blue" };
} else {
  timeStyle = "Evening";
  style = { color: "yellow" };
}

ReactDOM.render(
  <div>
    <h1 style={custStyle}>Hello</h1>
    <p className="heading" style={style}>
      Good {timeStyle}
    </p>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
