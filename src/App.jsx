import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [info, setInfo] = useState([]);
  let [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/info").then((res) =>
      res.json().then((data) => {
        setInfo(data);
      })
    );
  }, []);

  let filter = (info) => {
    if (search === "") {
      return info;
    } else {
      return info.filter((item) =>
        item.first_name.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>Hello! What are you searching for?</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <ul>
          {filter(info).map((i) => (
            <li key={i.id}>
              <p>{i.first_name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
