import logo from './logo.svg';
import './App.css';
import data from './data.json';


function App() {

  const array1 = [{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	}];

  const array2 = [{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	}];

  const array = array1.concat(array2);

  


  


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
          {
            array.map((i) => {
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
      

    </div>
  );
}

export default App;
