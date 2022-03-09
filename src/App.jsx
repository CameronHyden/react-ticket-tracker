import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";
import DateTime from "./components/DateTime/DateTime";
import SearchBar  from "./components/SearchBar/SearchBar";
import react, { useState} from "react";



const App = () => {
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

  // const SearchInput = () =>{
  //   const[input, setInput] = useSate("")
  // }

  return (
    <>
    <div className="ticket-application__container">
    <section className="dateSearch-container">
        <DateTime />
        <SearchBar />
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
