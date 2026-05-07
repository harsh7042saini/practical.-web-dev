import React, { useEffect, useState } from "react";
import Child from "./Child";

function App() {

  // Props Data
  const name = "Harsh";
  const age = 21;

  // API Data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>

      {/* Props Question */}
      <h1>Props Example</h1>

      <Child name={name} age={age} />

      <hr />

      {/* Fetch API Question */}
      <h1>Fetch API Example</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;
