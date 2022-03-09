import React from "react";

const dateTime = () => {
  const showDate = new Date();
  const displayTodaysDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear(); 
  
  const displayTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes();
  return (
    <div>
      <input type="text" value={displayTodaysDate} readOnly={true} />
       {displayTime}
    </div>
  );
};
export default dateTime;
