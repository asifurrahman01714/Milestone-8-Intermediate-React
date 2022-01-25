import { useState } from "react";
import "./App.css";
import Data from './FakeData/FakeData.json';


function App() {
  const [query, setQuery] = useState("")
  return (
    <div className="App">
      <div>
      <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        {
          Data.map((post, index) => {
            <div className="box" key={index}>
              <p>{post.title}</p>
              <p>{post.author}</p>
            </div>
          })
        }
    </div>
    </div>
  );
}

export default App;
