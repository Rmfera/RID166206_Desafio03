import './App.css'
import Contacts from './componentes/sections/Contacts'
import AboutMe from './componentes/sections/AboutMe'
import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation'
import Projects from './componentes/sections/Projects'
import { useState, useEffect } from 'react'
function App() {
  const [mostrarMensagem, setMostrarMensagem] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarMensagem(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      {
        mostrarMensagem ? (
          <div className="mensagem-boas-vindas">
            <h3>BEM VINDO AO MEU PORTFÓLIO!</h3>
          </div>
        ) :
          (
            <>
              <Navbar />
              <Presentation />
              <Projects />
              <AboutMe />
              <Contacts />
            </>
          )
      }
    </>
  )
}

export default App
