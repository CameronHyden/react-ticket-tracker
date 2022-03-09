import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import DateTime from "../DateTime/DateTime";
import sun from "../../assets/images/sun1.png";
import moon from "../../assets/images/moon.png";
import sunRise from "../../assets/images/sunRise.png";
import "./NavBar.scss"

const Nav = (props) => {
  const { searchTerm, handleSearchInput } = props;

  const currentHour = new Date().getHours();
  let greetingImg = sunRise;

  if (currentHour >= 12) {
    greetingImg = sun;
  }

  if (currentHour >= 18) {
    greetingImg = moon;
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchInput={handleSearchInput}
      />
      <div className="header-container">
      <h2>Ticket Tracker</h2>
      <img className="greetingImage" src={greetingImg} alt="greetingIcon" />
      </div>
      <DateTime />
    </>
  );
};

export default Nav;
