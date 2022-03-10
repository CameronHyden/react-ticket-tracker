import React from "react";
import "./DateTime.scss";

const dateTime = () => {
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();

  const displayTime = showDate.getHours() + ":" + showDate.getMinutes();

  return (
    <div className="dateTime-container">
      <input
        className="date-box"
        type="text"
        value={displayTodaysDate}
        readOnly={true}
      />
      <span className="time-box">{displayTime}</span>
    </div>
  );
};
export default dateTime;
