import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2 } from 'lucide-react'
import { Howl } from 'howler'

const MusicToggle = () => {
  const soundRef = useRef(null)

  useEffect(() => {
    const playMusic = () => {
      soundRef.current = new Howl({
        src: ['https://www.bensound.com/bensound-music/bensound-relaxing.mp3'],
        loop: true,
        volume: 0.3,
        html5: true
      })
      soundRef.current.play()
    }

    // Try to play immediately
    playMusic()

    // Also try on first user interaction
    const handleInteraction = () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play()
      }
      document.removeEventListener('click', handleInteraction)
    }
    document.addEventListener('click', handleInteraction)

    return () => {
      if (soundRef.current) {
        soundRef.current.stop()
      }
      document.removeEventListener('click', handleInteraction)
    }
  }, [])

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-kawaii-pink/80 backdrop-blur-sm border border-white/30 shadow-lg z-50"
    >
      <Volume2 className="text-white" size={20} />
    </motion.div>
  )
}

export default MusicToggle