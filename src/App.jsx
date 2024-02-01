import { useState } from 'react'
import './App.css'
import MovingButton from '../Component/MovingButton'
import Navbar from '../Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <h1 className='Color'>Do You Love Me ?</h1>

    <button onClick={() => alert('Thank You :)')}>Yes</button>

    <MovingButton/> 

   <p>Press at least 7 times to believe it!</p>
     
    </>
  )
}

export default App
