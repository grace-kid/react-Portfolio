// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Headers from './component/Header'
import Section1 from './component/Section1'
import Intro from './component/Intro'
import Skills from './component/Skills'
import Experience from './component/Experience'
import Language from './component/Language'
import Projects from './component/Projects' 
import Testimonials from './component/Testimonials'
import Contacts from './component/Contacts'
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <div className='p-0 m-0 '>
      <Headers />
      <Section1 />
      <Intro />
      <Skills />
      <Experience />
      <Language />
      <Projects /> 
      <Testimonials />
      <Contacts />
    </div>
 
    </>
  )
}

export default App
