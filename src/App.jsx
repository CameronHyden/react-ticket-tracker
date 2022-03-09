import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import team from "./data/team";
import DateTime from "./components/DateTime/DateTime";



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

  return (
    <>
    <section>
      <div>
        <DateTime />
      </div>
    </section>

    <section>
    <div className="allEmployee-cards">
      <div className="card-container">{allEmployeeCards}</div>
    </div>
    </section>
    </>
  );
};

export default App;
