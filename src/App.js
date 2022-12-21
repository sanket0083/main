import './App.css';
import Header from "./component/Header";


function App() {

  const EmployeeData = [
    {
      name: "amit",
      work: "job worker",
      salary: "40000",
      bonus: 1000,
      status: true
    },  
  ]

  return (
    <div className="App">
      <Header EmployeeData={EmployeeData}  
     
      />

    </div>
  );
}

     
export default App;
