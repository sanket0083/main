import React , {useState , useEffect} from 'react'

const App = () => {

  const [name, setname] = useState(true)

  useEffect(() =>{

  },[name])

  const btn = () =>{
    const sa = name ? false : true;
    setname(sa);
  }

  return (
    <div>
      {name ? "yes" : "no"}
      <button onClick={btn}>submit</button>
    </div>
  )
}

export default App
