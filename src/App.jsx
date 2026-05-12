import Navbar from './components/sections/Navbar/Navbar.jsx'
import Hero from './components/sections/Hero/Hero.jsx'
import About from './components/sections/About/About.jsx'
import Stack from './components/sections/Stack/Stack.jsx'
import Experience from './components/sections/Experience/Experience.jsx'
import Projects from './components/sections/Projects/Projects.jsx'
import Education from './components/sections/Education/Education.jsx'
import Contact from './components/sections/Contact/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

    </>
  )
}
