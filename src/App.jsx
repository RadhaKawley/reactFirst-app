import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import ProfileCardContainer from './ProfileCardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <div>
      <ProfileCardContainer />
      
    </div>
      
    </>
  )
}

export default App
