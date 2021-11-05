import './App.css';
import { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  return <div className="App">
    <h1>Konz Form</h1>
    <div class="information">
      <label>Full name:</label>
      <input type='text' onChange={(event) => {
        setName(event.target.value);
      }}></input>
      <label>Age:</label>
      <input type='number' onChange={(event) => {
        setAge(event.target.value);
      }}></input>
      <label>Country:</label>
      <input type='text' onChange={(event) => {
        setCountry(event.target.value);
      }}></input>
      <label>Position:</label>
      <input type='text' onChange={(event) => {
        setPosition(event.target.value);
      }}></input>
      <label>Wage:</label>
      <input type='number' onChange={(event) => {
        setWage(event.target.value);
      }}></input>
      <button>Add employee</button>
    </div>



  </div>
}

export default App;
