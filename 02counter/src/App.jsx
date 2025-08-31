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
      prevCounter = 19;
    }

    // Reason for below code : Har click par value sirf ek hi bar update hogi, due to useState jo batches mein updates bhejta hai.Due to all lines doing same work , they are sent in one batch.

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // If and only if you want to use as such : do this : where prevCounter is parameter which is taken by the callback inside the setCounter Method Call. i.e. prevCounter is holding the previous value of counter.

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

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
