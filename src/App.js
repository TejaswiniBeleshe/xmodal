import React, { useState } from 'react';
import styles from "./App.module.css"
import Model from './Model';

function App() {
  const [state,setState] = useState(false)
  return (
    <div className={styles.modal}>
      <h1>User Details Model</h1>
      <button id={styles.openbtn} onClick={()=>setState(true)}>Open Form</button>
      {state?<Model setState={setState}/>:""}
      
    </div>
  );
}

export default App;
