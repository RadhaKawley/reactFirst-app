import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import ProfileCardContainer from './ProfileCardContainer'
import Counter from './Counter'
import UserList from './UserList'
import LifecycleDemo from './LifecycleDemo'

function App() {
  const [show, setShow] = useState(true);
return (
      
      <div>
      <button onClick={() => setShow(!show)}>
      {show ? 'Hide' : 'Show'} component
      </button>
      {show && <LifecycleDemo />}
      </div>
)
}

export default App
