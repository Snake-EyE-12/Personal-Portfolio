import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary-green">
              <Image
                src="./portfolio.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">
                Hello, I'm <span className="text-primary-green">Chase Guymon</span>
              </h1>
              <p className="text-text-secondary text-lg mb-6">
                Game Developer | Software Engineer
              </p>
              <p className="text-text-secondary">
                I'm a developer with a focus on thoughtful design and clean, maintainable code. I've been building things since I was ten — now I apply that same curiosity to creating software and games that are both well-crafted and user-focused. This portfolio is a collection of the projects I've built, explored, and learned from along the way.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/games" className="project-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-primary-green">Game Projects</h2>
              <p className="text-text-secondary mb-4">
                Check out the games I've created, from small experiments to full releases.
                Explore my journey in game development and the creative process behind each project.
              </p>
              <span className="text-primary-green text-sm group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                View Games
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link href="/software" className="project-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-primary-green">Software Projects</h2>
              <p className="text-text-secondary mb-4">
                Explore my collection of software projects, from web applications to utility tools.
                See how I solve real-world problems through code and innovation.
              </p>
              <span className="text-primary-green text-sm group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                View Projects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 