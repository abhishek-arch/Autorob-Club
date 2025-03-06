import { useState,useRef } from 'react'
import './App.css'
import Navbar from './navbar'
import './index.css'
import Header from './Header'
import Team from './Team'
import './navbar.css'


function App() {
  const cursor = useRef(null)
  const [position, setposition] = useState({x:0, y:0})
const MouseEvent = (e) => {
    setposition({x: e.clientX, y: e.clientY})
    cursor.current.style.left = `${e.clientX}px`
    cursor.current.style.top = `${e
    .clientY}px`
    
}
const [isopen, setisopen] = useState(false)
  return (
    <>
     <div className={`floating_bar ${isopen ? "open" : ""} border-2 border-black float-right  w-80 h-screen`}>
     <ul className='flex navbar justify-end gap-10 p-2 items-center flex-col text-white size-'>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Library</li>
        </ul>

     </div>
     <Navbar isopen ={isopen} setisopen={setisopen} />
    <div className="cursor border-2"  ref={cursor}></div>
     
      <Header />
      <Team />
    </>
  )
}

export default App
