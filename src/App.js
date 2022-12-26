import React, { useState, useEffect } from "react";

export const App = () => {
  const [count, setcount] = useState(0);

  // updating component
  useEffect(() => {}, [count]);

  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>submit</button>
    </div>
  );
};

export default App;
