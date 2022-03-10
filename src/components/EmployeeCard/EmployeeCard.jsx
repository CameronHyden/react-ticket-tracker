import React, { useState } from "react";

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import "./EmployeeCard.scss";

const EmployeeCard = ({ employeeName, employeeRole, employeeId }) => {
  const [currentCard, newCard] = useState(0);

  const handleIncrement = () => {
    newCard(currentCard + 1);
  };

  const handleDecrement = () => {
    if (currentCard > 0) {
      newCard(currentCard - 1);
    }
  };
  return (
    <div className="employee-card">
      <h1 className="employee-card__name">{employeeName}</h1>
      <h2 className="employee-card__role">{employeeRole}</h2>

      <div className="counter-container">
        <h3>Tickets</h3>
        <p className="counter">{currentCard}</p>
        <img
          onClick={handleDecrement}
          className="employee-card__left-arrow"
          src={leftArrow}
          alt=""
        />
        <img
          onClick={handleIncrement}
          className="employee-card__right-arrow"
          src={rightArrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default EmployeeCard;
