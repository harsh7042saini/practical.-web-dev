import React from "react";
import Child from "./Child";

function App() {
  const name = "Harsh saini";
  const age = 19;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export  default app;    
 