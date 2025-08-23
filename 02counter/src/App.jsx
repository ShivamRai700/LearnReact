import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// React says,"variable updation tum kaise bhi kar lo, jab ui me updation karna hoga , wo mere tareeke se hoga" : this is where hooks are used
// React ek saath multiple jagah change la sakta hai.

function App() {
  let [counter, setCounter] = useState(15);
  // let counter =  15

  let addValue = function () {
    // counter = counter + 1;
    if (counter >= 19) {
      counter = 19;
    }
    setCounter(counter + 1);
  }

  let removeValue = () => {
    if (counter < 1) {
      counter = 1;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
