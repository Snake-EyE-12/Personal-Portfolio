import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

type SoftwareProject = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const projects: SoftwareProject[] = [
  {
    title: "My Portfolio",
    description: "A modern, responsive portfolio website showcasing my journey in game development and software engineering. Built with Next.js and featuring dynamic content management, smooth animations, and a sleek design.",
    technologies: ["Cursor", "Github", "Web Dev"],
  },
  {
    title: "Extreme Recycler",
    description: "A robust backend system developed for waste management optimization. Features comprehensive database management, real-time data processing, and efficient resource allocation algorithms.",
    technologies: ["Bootstrap", "Databases", "C#"],
    image: "./software/recycler.png",
  },
  {
    title: "5 Card Poker",
    description: "An embedded systems project implementing a visual poker game on Raspberry Pi hardware. Demonstrates practical application of Python in hardware integration and graphical interface development.",
    technologies: ["Raspberry Pi", "Python", "Hardware"],
    image: "./software/rasberryPiPoker.png",
  },
  {
    title: "Chess960",
    description: "Contributed to an open-source Chess960 variant implementation, enhancing gameplay mechanics and improving code architecture. Added features while maintaining compatibility with the original codebase.",
    technologies: ["OpenSource", "Collaboration", "C#"],
    image: "./software/chessGame.png",
    link: "https://github.com/youssefs20/ChessGame/tree/main"
  },
  {
    title: "Unity Utilities Package",
    description: "A comprehensive utility package for Unity developers, streamlining common game development tasks. Includes tools for scene management, input handling, and performance optimization.",
    technologies: ["Unity", "DevTools", "C#"],
    image: "./software/unity.png",
    link: "https://github.com/Snake-EyE-12/UnityUtilitiesPackage"
  }
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
          {projects.map((project, index) => {
            if (project.link) {
              return (
                <Link
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card group animate-fade-in relative overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectContent project={project} index={index} />
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="project-card group animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectContent project={project} index={index} />
              </div>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

function ProjectContent({ project, index }: { project: SoftwareProject; index: number }) {
  return (
    <>
      <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
            priority={index < 6}
          />
        ) : (
          <div className="w-full h-full bg-background-light flex flex-col p-2 overflow-hidden">
            {/* Mini header */}
            <div className="w-full h-8 bg-background-dark/95 backdrop-blur-xl border-b border-primary-green/10 flex items-center px-2 mb-2">
              <div className="text-[8px] font-bold text-primary-green">Portfolio</div>
            </div>
            
            {/* Mini content */}
            <div className="flex-grow w-full overflow-hidden">
              <div className="text-[6px] font-bold text-center mb-1">
                Software <span className="text-primary-green">Projects</span>
              </div>
              
              {/* Mini project grid */}
              <div className="grid grid-cols-3 gap-1 p-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-background-dark/50 rounded-sm p-1">
                    <div className="w-full h-6 bg-background-dark mb-1 rounded-[2px]" />
                    <div className="w-3/4 h-1 bg-primary-green/20 mb-[2px] rounded-[1px]" />
                    <div className="w-full h-1 bg-text-secondary/20 rounded-[1px]" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mini footer */}
            <div className="w-full h-6 bg-background-dark/80 border-t border-primary-green/20 mt-1 flex items-center justify-between px-2">
              <div className="w-12 h-1 bg-text-secondary/20 rounded-[1px]" />
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary-green/20" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <h2 className="text-xl font-bold mb-2 text-primary-green group-hover:text-opacity-90">
        {project.title}
      </h2>
      
      <p className="text-text-secondary mb-4">
        {project.description}
      </p>
      
      <div className="mb-4">
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
      
      {project.link && (
        <span className="text-primary-green text-sm group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
          View Project
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  );
} 