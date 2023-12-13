import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact us/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App