import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FloatingElements from './components/FloatingElements'
import MusicToggle from './components/MusicToggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-kawaii-pink via-kawaii-cream to-kawaii-lavender'
    }`}>
      <FloatingElements isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </motion.main>
      
      <footer className="text-center py-8 text-gray-600">
        <p className="font-cute">Made with 🍓 + 💻 by ANKUR • Deployed on Vercel ✨</p>
      </footer>
      
      <MusicToggle />
    </div>
  )
}

export default App