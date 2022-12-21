import './App.css';
import Header from "./component/Header";

function App() {

  const EmployeeData = [
    {
      name: "amit",
      work: "job worker",
      salary: 40000,
      bonus: 1000,
      status: true
    },  
  ]

  let stdname = "sanket";
  let stdemail = "sanket@gmail.com";
  let stdpass = "1234";


  return (
    <div className="App">
      <Header EmployeeData={EmployeeData}  
      name={stdname}
      email={stdemail}
      pass={stdpass}
      />

    </div>
  );
}

     
export default App;
