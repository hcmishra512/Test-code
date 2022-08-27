import { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const clickHandler = async (e) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => {
      return response.json();
    });

    return response.json();
  };

  return (
    <div className="App">
      <input type="text" onChange={searchHandler} />
      <button type="submit" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
}

export default App;
