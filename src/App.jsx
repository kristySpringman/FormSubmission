import React, { useState } from 'react';
import './App.css';


function App() {
  const [userInput, setUserInput] = useState('')
  let [results, setResult] = useState([])
  const [visibility, setIsVisible] = useState('none')


  const handleSubmit = (event) => {
    event.preventDefault();
    setIsVisible('block')
    let userInput = event.target[0].value;
    setResult(results = [...results, { userInput: userInput, id: results.length }]);
    setUserInput(event.target[0].value = "")
  }

  return (
    <div className="main">
      <div className="container">
        <h1 className="center">Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="userInput">
            What would you like to say?
          </label>
          <textarea
            rows="4" 
            cols="50"
            className="form"
            type="text"
            id="userInput"
            name="userInput"
            value={results.userInput}
            required
            onChange={event => setUserInput(event.target[0].value)} />
          
          <input className="submit" type="submit"></input>
        </form>
        <div className="results" style={{ display: visibility }}>
          <h2 className="label" id="resultTitle">Results:</h2>
          <div>
            <ul>{results.map(e =>
            <li key={e.id}>{e.userInput}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;