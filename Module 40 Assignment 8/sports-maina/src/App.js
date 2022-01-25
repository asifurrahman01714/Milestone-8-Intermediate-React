import { useState } from "react";
import "./App.css";
import Data from './FakeData/FakeData.json';


function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
      <h1>Written terms: {query}</h1>
        {
          Data.map((post) => (
            <div className="box" key={post.id}>
              <p>{post.title}</p>
              <p>{post.author}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
