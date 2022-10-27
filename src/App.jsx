// Create an application with React (you are free to use CRA or Vite) that fetch all the users from jsonplaceholder
//API (https://jsonplaceholder.typicode.com/users).

// These data should be stored inside a state.
// Create a Context inside your application and spread the data inside it.

// Use the data inside another component, and, if you want, try to update the data inserting new values.

import { useState } from "react";
import GlobalContext from "./contexts/GlobalContext";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <GlobalContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <Cards />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
