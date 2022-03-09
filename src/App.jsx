import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";
import react, { useState } from "react";
import Nav from "./components/NavBar/NavBar";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
  };

  const filterEmployees = team.filter((employee) => {
    const employeeCardsToLower = employee.name.toLowerCase();
    console.log(employeeCardsToLower);
    return employeeCardsToLower.includes(searchTerm) && <EmployeeCard />;
  });
  console.log(filterEmployees);

  const allEmployeeCards = team.map((employeeObject) => {
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
        <section className="dateSearch-container">
          <Nav searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
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
