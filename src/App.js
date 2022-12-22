import React, { useState } from "react"


export default function App() {

  const [name , setname] = useState({
    name : 'ravi',
    email : 'ravi@gmail.com'
  })

  const  btn = () => {
    setname({
      name : 'sanket',
      email : 'sanket@gmail.com'
    })
  }
    

  return (
    <div>
      name is {name.name} <br />
      email is {name.email} <br />
      <button onClick={btn}>submit</button>
    </div>
  )
}
