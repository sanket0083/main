import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setcount] = useState(0);

  // unmouting component
  useEffect(() => {
  
    return() => {
      alert('unmouting error')
    }
  }, []);



  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>submit</button>
    </div>
  );
};
  
export default App;
