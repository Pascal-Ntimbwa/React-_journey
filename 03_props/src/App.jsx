import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import Box from './components/Box'

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-400 p-4 rounded-md font-bold underline">
        Hello world!
      </h1><br />
      <Box userName="Benedict Nt" job='Engineer' imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhILbOCuPVs7qE4UwkwRmifpucpNf6i6j8A&usqp=CAU"/>
      <br />
      <Box userName='Jules Bokande' imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPe8qpG8LMkMWNfkvlk5wjuKAhsPeD1hFMA&usqp=CAU'/>
      <br />
      <Box userName='Calixte Nt' imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStESfIDfnVuu82WvWFivZyQZwx77GeAQCnQg&usqp=CAU'/>
    </>
  )
};

export default App
