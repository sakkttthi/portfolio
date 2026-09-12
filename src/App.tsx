import { Header } from './components/Header'
import { Hero } from './components/Hero'
import {
  Contact,
  Education,
  Experience,
  Footer,
  Skills,
  Summary,
} from './components/Sections'

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
