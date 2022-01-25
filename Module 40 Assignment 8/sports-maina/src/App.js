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
        Data.filter(post => {
          if (query === '') {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
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
