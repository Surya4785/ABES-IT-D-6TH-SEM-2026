import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Users List</h1>

      <div className="grid">
        {data.map(user => (
          <div key={user.id} className="card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className="badge">{user.company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;