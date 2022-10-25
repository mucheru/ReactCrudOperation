import logo from './logo.svg';
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='main'>
      <h2 className="main-header">React Crud Operations</h2>
      <div>
       <Create></Create>
      </div>
      <div><br></br>
        <Read></Read>
      </div>
      <Update></Update>

      </div>
    </Router>
    
  );
}

export default App;
