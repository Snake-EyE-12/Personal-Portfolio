'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MouseTrail from '@/components/MouseTrail'
import Image from 'next/image'
import Link from 'next/link'

type GameProject = {
  title: string;
  description: string;
  purpose: string;
  image: string;
  link: string;
  technologies: string[];
}

// Placeholder data - you'll replace this with your actual games
const games: GameProject[] = [
  {
    title: "Javelin of Speed",
    description: "A small game about movement and throwing around a javelin trying to score the most points, made to build out a completely dynamic and reusable character controller.",
    purpose: "A technical showcase developed to demonstrate advanced character controller systems and fluid movement mechanics, pushing the boundaries of Unity's physics engine.",
    image: "/games/javelinGame.png",
    link: "https://snake-eye-12.itch.io/javelin-of-speed",
    technologies: ["Unity", "Shaders", "C#"]
  },
  {
    title: "Lex Talionis A",
    description: "A team-based, 4 player, couch co-op where aliens fight astronauts, drones, and bosses for revenge against humanity. Choose from four aliens with unique abilities and survive together in this 2D Run n' Gun Adventure.",
    purpose: "Developed as part of Neumont Game Studios' professional development program, leading a team of five developers through a comprehensive 10-week production cycle.",
    image: "/games/lexTalionisAGame.png",
    link: "https://store.steampowered.com/app/3512790/Lex_Talionis_A/",
    technologies: ["Steam", "Unity", "Game Design"]
  },
  {
    title: "Contiled",
    description: "A turn based dungeon crawling game where your team of heroes strengthen and overcome a labyrinth's monsters as the floor beneath your feet constantly changes!",
    purpose: "Created as a capstone project showcasing advanced game systems design and modding capabilities, developed independently over an intensive 10-week period.",
    image: "/games/contiledGame.png",
    link: "https://snake-eye-12.itch.io/contiled",
    technologies: ["Unity", "Json", "Modding"]
  },
  {
    title: "Spectres and Spirits",
    description: "An engaging fast-paced game that allows players to possess various characters, utilizing their abilities and acquired enhancements to overcome challenging bosses.",
    purpose: "Award-winning entry (3rd place) in the GoingIndie game jam, demonstrating rapid prototyping and team scaling from 3 to 6 developers within a 2-week development sprint.",
    image: "/games/spectresSpiritsGame.png",
    link: "https://jayvlyn.itch.io/spectres-and-spirits",
    technologies: ["Design Patterns", "Unity", "Teamwork"]
  },
  {
    title: "Time Slice",
    description: "A thrilling time-based challenge that requires players to master the game's map and achieve maximum efficiency within a limited timeframe.",
    purpose: "First-place winner at Neumont Game Jam, created by a team of four sophomore students in just 48 hours, showcasing rapid development and efficient team coordination.",
    image: "/games/timeSliceGame.png",
    link: "https://jayvlyn.itch.io/time-slice",
    technologies: ["Level Design", "Unity", "C#"]
  },
  {
    title: "Fat Rat And Spouse Mouse",
    description: "A minimalist game featuring dual-character control aimed at maximizing scores while evading environmental hazards.",
    purpose: "Award-winning game jam entry (3rd place) that explores innovative dual-character mechanics and procedural level generation within tight time constraints.",
    image: "/games/fatRatMouseGame.png",
    link: "https://jayvlyn.itch.io/fat-rat-and-spouse-mouse",
    technologies: ["Procedural Generation", "Dual Characters", "Unity"]
  },
  {
    title: "Brad to the Bone",
    description: "A light-hearted game that places players in the role of the antagonist, tasked with disrupting children's sandcastle constructions for points.",
    purpose: "First-place winning entry as a freshman at Neumont Game Jam, demonstrating strong game design fundamentals and creative mechanics implementation.",
    image: "/games/bradToTheBoneGame.png",
    link: "https://jayvlyn.itch.io/brad-to-the-bone",
    technologies: ["Unity", "C#", "Game Design"]
  },
  {
    title: "PackageUp",
    description: "A single-screen puzzle game designed to simulate the complexities of urban traffic management, encouraging strategic thinking and efficient resource allocation.",
    purpose: "Developed for the Confounding Calendar challenge, focusing on creating an engaging single-screen experience with tight puzzle design and time management mechanics.",
    image: "/games/packageUpGame.png",
    link: "https://snake-eye-12.itch.io/packageup",
    technologies: ["PuzzleScript", "Level Design", "Time Crunch"]
  }
]


export default function GamesPage() {
  return (
    <>
      <MouseTrail />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            My <span className="text-primary-green">Games</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Link
                key={index}
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group animate-fade-in relative overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index < 6}
                  />
                </div>
                
                <h2 className="text-xl font-bold mb-2 text-primary-green group-hover:text-opacity-90">
                  {game.title}
                </h2>
                
                <p className="text-text-secondary mb-4">
                  {game.description}
                </p>
                
                <div className="mb-4 p-4 bg-background-dark/50 rounded-lg border border-primary-green/10">
                  <h3 className="text-sm font-semibold text-primary-green mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Background & Achievement
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {game.purpose}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-primary-green mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {game.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded bg-background-dark text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <span className="text-primary-green text-sm group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                  Play Game
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
} 