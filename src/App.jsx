import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Terminal from './components/Terminal'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import CommandPalette from './components/CommandPalette'

function App() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />

      <Navbar />

      <main>
        <Hero />          {/* First impression */}
        
        <Terminal />      {/* Identity */}

        <About />         {/* Who you are */}

        <Skills />        {/* What you’re good at */}

        <Projects />      {/* Proof */}

        <Contact />       {/* Conversion */}
      </main>
    </>
  )
}

export default App
