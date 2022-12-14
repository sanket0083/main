import logo from './logo.svg';
import './App.css';
import data from './data.json';


function App() {

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

// let sum = 0;
// for (const i of array1) {
//     sum = sum + i.price;
// }
// console.log(sum);

const ans = array1.reduce((acc,cur) =>{
  return acc + cur.price;
},0);
console.log(ans);


  



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

      <table>
        <tbody>
          <tr>
          <th>color</th>
          <th>value</th>
          </tr>
          {
            data.map((i) => {
              return (
                <tr key={Math.random()}>
                  <td>{i.color}</td>
                  <td>{i.value}</td>
                </tr>
              )
            })
          }
     </tbody>
      </table>
      <table>
        <tbody>
          <tr>
          <th>color</th>
          <th>value</th>
          </tr>
          
     </tbody>
      </table>
      

    </div>
  );
}

export default App;
