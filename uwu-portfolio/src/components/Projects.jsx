import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Interactive Whiteboard 📝",
      description: "A collaborative digital whiteboard for drawing and note-taking",
      tech: ["JavaScript", "Canvas API", "HTML5"],
      image: "🎨",
      thumbnail: "/whiteboard-thumb.svg",
      demo: "#",
      github: "https://github.com/susbro2/whiteboard"
    },
    {
      title: "Voxen.ai 🤖",
      description: "AI-powered voice assistant with advanced natural language processing",
      tech: ["Python", "AI/ML", "NLP"],
      image: "🎙️",
      thumbnail: "/voxen-thumb.svg",
      demo: "https://voxenai.vercel.app/",
      github: "https://github.com/susbro2/voxen.ai"
    },
    {
      title: "FreeYT 🎥",
      description: "Free YouTube video downloader with clean interface and fast downloads",
      tech: ["Python", "Flask", "YouTube API"],
      image: "📺",
      thumbnail: "/freeyt-thumb.svg",
      demo: "#",
      github: "https://github.com/susbro2/freeyt"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-kawaii text-5xl text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          My Projects 🧠
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="kawaii-card group"
            >
              <div className="mb-4 text-center">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-2xl mb-2"
                />
                <div className="text-2xl">{project.image}</div>
              </div>
              
              <h3 className="font-kawaii text-xl mb-3 text-gray-800">{project.title}</h3>
              
              <p className="font-cute text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-kawaii-pink/20 text-kawaii-pink rounded-full text-xs font-cute"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.demo}
                  className="flex-1 bg-kawaii-pink/80 text-white py-2 px-4 rounded-full text-center font-cute text-sm flex items-center justify-center gap-2 hover:bg-kawaii-pink transition-colors cursor-pointer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-full text-center font-cute text-sm flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Github size={16} />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="kawaii-button flex items-center gap-2 mx-auto"
          >
            <Sparkles size={20} />
            View More Projects 🍰
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects