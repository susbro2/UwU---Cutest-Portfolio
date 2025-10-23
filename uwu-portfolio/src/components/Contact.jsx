import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Youtube, Send } from 'lucide-react'

const Contact = ({ isDarkMode }) => {
  const socialLinks = [
    { icon: <Github size={24} />, label: "GitHub", url: "https://github.com/susbro2", color: "hover:text-gray-700" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", url: "https://www.linkedin.com/in/ankur-yadav-03a68622a/", color: "hover:text-blue-600" },
    { icon: <Youtube size={24} />, label: "YouTube", url: "https://www.youtube.com/@Oopscodex", color: "hover:text-red-500" },
    { icon: <Mail size={24} />, label: "Email", url: "nexstarteamsace@gmail.com", color: "hover:text-kawaii-pink" }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-kawaii text-5xl text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Let's Connect 💌
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="kawaii-card"
          >
            <h3 className="font-kawaii text-2xl mb-6 text-gray-800">Send me a kind note 💕</h3>
            
            <form className="space-y-4" action="https://formspree.io/f/xgvnjgen" method="POST">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your lovely name ✨"
                  className="w-full p-3 rounded-2xl border border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none font-cute"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address 📧"
                  className="w-full p-3 rounded-2xl border border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none font-cute"
                  required
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write me a kind note 💕"
                  className="w-full p-3 rounded-2xl border border-kawaii-pink/30 focus:border-kawaii-pink focus:outline-none font-cute resize-none"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full kawaii-button flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message 🌸
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="kawaii-card text-center mb-8">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="font-kawaii text-xl mb-3 text-gray-800">Let's be friends!</h3>
              <p className="font-cute text-gray-600">
                I love meeting new people and collaborating on cute projects! 
                Drop me a message and let's create something magical together ✨
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`kawaii-card text-center p-4 transition-colors ${link.color}`}
                >
                  <div className="flex justify-center mb-2">{link.icon}</div>
                  <p className="font-cute text-sm text-gray-700">{link.label}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact