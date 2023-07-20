import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'





const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
