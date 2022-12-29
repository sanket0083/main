import React, {useEffect , useState} from 'react'

const App = () => {
  return (
    <div>
      <Hoc cmp = {Counter}/>
      <Hocgreen cmp = {Counter}/>
    </div>
  )
}
function Hoc(props){
  return <div>
    <h2 style={{backgroundColor : 'red'}}><props.cmp /></h2>
  </div>
}
function Hocgreen(props){
  return <div>
    <h2 style={{backgroundColor : 'green'}}><props.cmp /></h2>
  </div>
}
function Counter(){
  const [count, setcount] = useState(0)
  return <div>
    {count} <br />
    <button onClick={()=>setcount(count + 1)}>update</button>

  </div>
}

export default App
