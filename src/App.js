import React, { useState } from 'react';
import "./App.css"
import Model from './Model';

function App() {
  const [state,setState] = useState(false)
  return (
    <div className="modal">
      <h1>User Details Model</h1>
      <button id="openbtn" onClick={()=>setState(true)}>Open Form</button>
      {state?<Model setState={setState}/>:""}
      
    </div>
  );
}

export default App;
