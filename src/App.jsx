import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

import { useState } from 'react'

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {

  const [currentPage, setCurrentPage] = useState("About")

  function renderPage () {

    if(currentPage == "About") {
      return <About />
    } else if(currentPage == "Contact") {
      return <Contact />
    } else if (currentPage == "Portfolio") {
      return <Portfolio />
    } else if (currentPage == "Resume") {
      return <Resume />
    }

  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage} />

      <main class="main">
        {
          renderPage()
        }
      </main>

    <Footer />
     
    </>
  )
}

export default App
