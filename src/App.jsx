import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";
import react, { useState } from "react";
import Nav from "./components/NavBar/NavBar";
import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  //change heading name from login input
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Joe",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    setUser({
      firstName: firstName,
      lastName: lastName,
    });
  };
  //toggle login page
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  //to use search bar to grab different cards
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  const filterEmployees = team.filter((employee) => {
    const employeeCardsToLower = employee.name.toLowerCase();
    return employeeCardsToLower.includes(searchTerm) && <EmployeeCard />;
  });

  const allEmployeeCards = filterEmployees.map((employeeObject) => {
    return (
      <EmployeeCard
        employeeName={employeeObject.name}
        employeeRole={employeeObject.role}
        employeeId={employeeObject.id}
        key={employeeObject.id}
      />
    );
  });

  return (
    <>
      <div className="ticket-application__container">
        {showLogin && (
          <LoginPage handleSubmit={handleSubmit} toggleHome={toggleLogin} />
        )}
        <section className="dateSearch-container">
          <Nav
            searchTerm={searchTerm}
            handleSearchInput={handleSearchInput}
            user={user}
            toggleLogin={toggleLogin}
          />
        </section>

        <section>
          <div className="allEmployee-cards">
            <div className="card-container">{allEmployeeCards}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
