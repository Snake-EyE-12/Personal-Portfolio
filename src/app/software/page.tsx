import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

type SoftwareProject = {
  title: string;
  description: string;
  purpose: string;
  technologies: string[];
  image: string;
  link: string;
}

// Placeholder data - you'll replace this with your actual projects
const projects: SoftwareProject[] = [
  {
    title: "Project 1",
    description: "A powerful application that...",
    purpose: "Developed to solve the problem of...",
    technologies: ["React", "Node.js", "TypeScript"],
    image: "./project1.jpg",
    link: "https://github.com/yourusername/project1"
  },
  // Add more projects here
]

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Software <span className="text-primary-green">Projects</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-background-light" />
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-primary-green">
                {project.title}
              </h2>
              
              <p className="text-text-secondary mb-4">
                {project.description}
              </p>
              
              <div className="mb-4 p-4 bg-background-dark/50 rounded">
                <h3 className="text-sm font-semibold text-primary-green mb-2">
                  Purpose & Background
                </h3>
                <p className="text-text-secondary text-sm">
                  {project.purpose}
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-primary-green mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded bg-background-dark text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 