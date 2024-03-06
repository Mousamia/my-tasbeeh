/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import BgTasbeeh from './BgTasbeeh.jsx'


function App() {

  return (
    <>
      <div>
        <h1 className='text-7xl font-bold'>Tasbeeh</h1>
        <h3 className='text-xl font-light mb-8'>Utilize Your time Effeciently</h3>
        <img src="./assets/react.svg" alt="" />
      </div>
     <BgTasbeeh></BgTasbeeh>

    </>
  )
}

export default App
