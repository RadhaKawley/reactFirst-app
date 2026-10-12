import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <div>
      <ProfileCard name="radha" age="25" />
    </div>
      
    </>
  )
}

export default App
