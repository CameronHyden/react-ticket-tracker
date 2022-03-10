import "./LoginPage.scss";
import blackCross from "../../assets/images/black-cross.png";
import React from "react";

const LoginPage = (props) => {
  const { handleSubmit, toggleHome } = props;
  return (
    <div className="login-page">
      <div className="login-page__content">
        <form className="login-page__form" onSubmit={handleSubmit}>
          <label htmlFor="FirstName">First Name</label>
          <input type="text" name="FirstName" id="FirstName" />
          <label htmlFor="LastName">Last Name</label>
          <input type="text" name="LastName" id="LastName" />
          <button>Save</button>
        </form>
        <img
          className="login-page__cross"
          src={blackCross}
          alt="cross"
          onClick={toggleHome}
        />
      </div>
    </div>
  );
};
export default LoginPage;
