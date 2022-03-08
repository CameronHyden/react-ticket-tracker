import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";

const employees = [
  team
]
console.log(employees)

const App = () => {
  const allEmployeeCards = team.map((employeeObject) => {
    
    return (
      <EmployeeCard employeeArr ={employees}
        employeeName={employeeObject.name}
        employeeRole={employeeObject.role}
        employeeId={employeeObject.id}
        key={employeeObject.id}
      />
    );
  });

  return (
    <div className="App">
      <div className="card-container">{allEmployeeCards}</div>
    </div>
  );
};

export default App;
