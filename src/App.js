import React, { useState } from "react"


export default function App() {

  // const  [ age , setage] = useState(1)
  // const plusage = age + 1

  const [valid , setvalid] = useState(true)

  const  btn = () => {
    const ans = valid ? false : true
    setvalid(ans)
    // setage(plusage)
  }
    

  return (
    <div>
      {/* Age is {age} <br /> */}
      name is {valid ? 'yes' : 'no'}
      <button onClick={btn}>submit</button>
    </div>
  )
}
