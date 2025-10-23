import { motion } from 'framer-motion'
import { Code, Heart, Coffee, Palette } from 'lucide-react'

const About = ({ isDarkMode }) => {
  const facts = [
    { icon: <Code size={24} />, text: "React & Python lover" },
    { icon: <Palette size={24} />, text: "UI/UX enthusiast" },
    { icon: <Coffee size={24} />, text: "Strawberry milk addict" },
    { icon: <Heart size={24} />, text: "Pastel color obsessed" }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-kawaii text-5xl text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          About Me 👩‍💻
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="kawaii-card"
          >
            <p className="font-cute text-lg leading-relaxed text-gray-700 mb-6">
              Hii~ 👋 I'm ANKUR, but my friends call me SUSBRO 🌷
              I'm a creative developer who loves turning ideas into adorable, functional little worlds on the web 💻✨
            </p>
            <p className="font-cute text-gray-600 mb-4">
              I believe coding isn't just logic — it's art, imagination, and heart 💖
              When I'm not designing interfaces or debugging, you'll probably find me exploring new tech, sipping coffee ☕, or sketching my next big idea 🎨
            </p>
            <p className="font-cute text-gray-600">
              My dream? To build experiences that make people smile — one pastel pixel at a time 🌈💫
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="kawaii-card text-center p-4"
              >
                <div className="text-kawaii-pink mb-2 flex justify-center">
                  {fact.icon}
                </div>
                <p className="font-cute text-sm text-gray-700">{fact.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About