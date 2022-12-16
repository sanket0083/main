import logo from './logo.svg';
import './App.css';
import data from './data.json';


function App() {

  const EmployeeData = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  const MedicineData =  [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  const array1 = [{
		color: "red",
		value: "#f00",
    price:600
	},
	{
		color: "green",
		value: "#0f0",
    price:100
	},
  {
		color: "green",
		value: "#0f0",
    price:300
	},
  {
		color: "green",
		value: "#0f0",
    price:200
	}
  
];

let sum = 0;
for (const i of array1) {
    sum = sum + i.price;
} 
console.log(sum);

const totalprice =MedicineData.reduce((acc,cur) =>{
  return acc + cur.price;
},0);
console.log(totalprice);

const sal = EmployeeData.filter((i) => i.salary > 35000);

 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> first-project submain
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br/>
     {/* map and reduce */}
      <table>
        <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>expiry</th>
         </tr>
        
          {
            MedicineData.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>{i.expiry}</td>
                  </tr>
                
              )
            })
          }
           <tr>
          <th>Total price</th>
          <th colSpan={4}>
         {totalprice}
          </th>
         </tr>
       </tbody>
      </table>
    <br/>
    {/* filter */}
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
            <th>bonus</th>

          </tr>

          {sal.map((i) => {
            return (
              <tr key={Math.random()}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>{i.bonus}</td>
              </tr>
            )
          })}

     </tbody>
      </table>

     </div>
  );
}

export default App;
