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
    setUserInput(userInput = '');
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput">What would you like to say?</label>
        <br />
        <input
          type="text"
          id="userInput"
          name="userInput"
          value={results.userInput}
          required
          onChange={event => setUserInput(event.target[0].value)}></input>
        <br />
        <input type="submit"></input>
      </form>
      <div style={{ display: { visibility } }}>
        <h2 >Results:</h2>
        <div>{results.map(e =>
          <p key={e.id}>{e.userInput}</p>
        )}
        </div>
      </div>
    </div>

  );
}

export default App;