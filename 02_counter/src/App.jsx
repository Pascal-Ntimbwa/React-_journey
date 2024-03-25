
import { useState } from "react";
import "./App.css"


function App() {
  //let counter = 0; ----> this way would be usefull in javascript(DOM) but with react we have to user "useState"

  // const removeOne = () => {
  //   counter = counter -= 1
  //   console.log(counter);
  // };

  // const addOne = () => {
  //   counter = counter += 1
  //   console.log(counter);
  // };

  const [counter, setCounter] = useState(0)   // notice that the 1st element in the [] is a variable, and the 2nd element is a method
  
  const addOne = () => {
    setCounter((prevCounter) => prevCounter + 1);   // it's  more poweful to us the callback function, because it will wait for the previous value to update then update the final value.
  };

  const removeOne = () => {
    setCounter((prevCounter) => prevCounter - 1)
  };


   return (
    <>
      <h1>Poject 01 -------- {counter}</h1>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={removeOne}>-</button>
        <button onClick={addOne}>+</button>
      </div>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
