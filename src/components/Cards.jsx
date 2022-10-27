import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";

function Cards() {
  const { users, setUsers } = useContext(GlobalContext);
  const handleAdd = () => {
    setUsers((prev) => [...prev, { name: "emerson", surname: "Lopes" }]);
  };

  useEffect(() => {
    const getUsers = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    getUsers();
  }, []);
  return (
    <div>
      <h1>{users.length}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => console.log(users)}>Log</button>
    </div>
  );
}

export default Cards;
