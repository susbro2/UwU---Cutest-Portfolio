import { motion } from 'framer-motion'

const FloatingElements = ({ isDarkMode }) => {
  const elements = isDarkMode 
    ? ['⭐', '🌙', '✨', '💫', '🌟']
    : ['💖', '🌸', '✨', '🧋', '🍓', '🌈', '☁️']

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {element}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements