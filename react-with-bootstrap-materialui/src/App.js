import './App.css';
import { Button } from 'react-bootstrap';
import MaterialUi from './MaterialUi/MaterialUi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-danger">Learning React Bootstrap</h1>
        <Button variant="primary">Primary</Button>
        <MaterialUi/>
      </header>
    </div>
  );
}

export default App;
