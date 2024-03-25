import { useState, useEffect } from 'react'
import './App.css'

import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("ZAR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
 }
 

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-contain bg-repeat'
         style={{backgroundImage: `url(https://images.unsplash.com/photo-1645226880663-81561dcab0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxtb25leSUyMGN1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D)`}}>
      
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currenyoptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button 
              className='absolute left-1/2 -translate-x-1/2 
              -translate-y-1/2 border-2 border-green-500 rounded-md bg-green-500 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label="to"
                currenyoptions={options}
                amount={convertedAmount}
                amountDisabled={true}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <button type='submit' className='w-full bg-teal-300 text-green px-4 py-2.5 rounded-xl'
            >Convert {from} to {to}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
