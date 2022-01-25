import "./App.css";
import Data from './FakeData/FakeData.json';
function App() {
  return (
    <div className="App">
      <div>
        <input placeholder="Enter Post Title"/>
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
