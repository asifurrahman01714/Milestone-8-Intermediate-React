import { useState } from "react";
import "./App.css";
import Data from './FakeData/FakeData.json';


function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <div>
      <input placeholder="Enter Post Title" onChange={event => setSearch(event.target.value)} />
      <h1>Written terms: {search}</h1>
      {
        Data.filter(post => {
          if (search === '') {
            return post;
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
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
