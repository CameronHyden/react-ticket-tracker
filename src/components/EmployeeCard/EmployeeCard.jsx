
import React, { useState } from "react";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import "./EmployeeCard.scss";

const EmployeeCard = ({ employeeName, employeeRole, employeeId, }) => {
 const [currentCard, newCard] = useState(0);

 const handleIncrement = () => {
  newCard(currentCard + 1)
};

const handleDecrement = () => {
  newCard(currentCard - 1)
};
  return (
  
      <div  className="employee-card" >
        <h1 className = "employee-card__name">#{employeeId} {employeeName}</h1>
        <h2 className = "employee-card__role">{employeeRole}</h2>
        <p>{currentCard}</p>
        <img onClick={handleDecrement} className = "employee-card__left-arrow"src={leftArrow} alt="" />
        <img onClick={handleIncrement} className = "employee-card__right-arrow"src={rightArrow} alt="" />
      </div>

  );
};

export default EmployeeCard;