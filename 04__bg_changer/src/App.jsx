
import { useState } from 'react'
import './App.css'



function App() {

  const [color, setColor] = useState("#292929");

  const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

  const randomHex = () => hex[Math.floor(Math.random() * hex.length)];

  function randomColor() {
     
    let randomHexValue = "#";

    for (let i = 0; i < 6; i++) {
      randomHexValue += randomHex();
    }

    setColor(randomHexValue);
  };


  return (

    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={randomColor}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Random</button>

          <button onClick={() => setColor("crimson")} style={{backgroundColor: "crimson"}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Crimson</button>

          <button onClick={() => setColor("teal")} style={{backgroundColor: "teal"}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Teal</button>
        </div>
      </div>
    </div>
  )
};

export default App
