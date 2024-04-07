import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Questions from './Components/Questions'

function App() {

  return (

    <div className='w-screen h-screen flex justify-center items-center bg-gray-200'>
      <Questions />
    </div>
  )
}

export default App
