'use client'

import { useEffect, useRef } from 'react'

export default function MouseTrail() {
  const trailRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const particles = useRef<{
    x: number;
    y: number;
    dy: number;
    element: HTMLDivElement;
    value: string;
    age: number;
    maxAge: number;
  }[]>([])
  const maxParticles = 300 // Increased for full screen coverage
  const binaryValues = ['0', '1']
  const navbarHeight = 64 // Height of the navbar
  const columnWidth = 20 // Width between columns
  const particlesPerFrame = 2 // Particles generated per frame
  const proximityThreshold = 100 // Distance in pixels to trigger color change
  const baseColor = '#00FF9D'
  const hoverColor = '#000000'

  useEffect(() => {
    // Calculate number of columns based on screen width
    const getNumColumns = () => Math.floor(window.innerWidth / columnWidth)

    const createParticle = () => {
      const particle = document.createElement('div')
      const value = binaryValues[Math.floor(Math.random() * binaryValues.length)]
      
      particle.style.position = 'absolute'
      particle.style.fontFamily = 'monospace'
      particle.style.fontSize = '14px'
      particle.style.fontWeight = '600'
      particle.style.color = baseColor
      particle.style.pointerEvents = 'none'
      particle.style.transform = 'translate(-50%, -50%)'
      particle.style.textShadow = '0 0 5px #00FF9D40'
      particle.style.transition = 'color 0.3s ease, text-shadow 0.3s ease'
      particle.textContent = value
      
      trailRef.current?.appendChild(particle)
      return { element: particle, value }
    }

    const updateParticles = () => {
      // Create new particles if needed
      for (let i = 0; i < particlesPerFrame; i++) {
        if (particles.current.length < maxParticles) {
          const { element, value } = createParticle()
          const maxAge = Math.random() * 180 + 360 // Live between 6-9 seconds
          
          // Pick a random column
          const numColumns = getNumColumns()
          const columnIndex = Math.floor(Math.random() * numColumns)
          const x = columnIndex * columnWidth + (columnWidth / 2)
          
          particles.current.push({
            x: x,
            y: navbarHeight, // Start from just below navbar
            dy: Math.random() * 0.6 + 0.8,
            element,
            value,
            age: 0,
            maxAge
          })
        }
      }

      // Update existing particles
      particles.current.forEach((p, index) => {
        p.age++
        p.y += p.dy

        // Calculate distance from mouse
        const dx = p.x - mousePos.current.x
        const dy = p.y - mousePos.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Interpolate color based on proximity
        if (distance < proximityThreshold) {
          const t = 1 - (distance / proximityThreshold)
          p.element.style.color = hoverColor
          p.element.style.textShadow = `0 0 8px ${hoverColor}80`
        } else {
          p.element.style.color = baseColor
          p.element.style.textShadow = `0 0 5px ${baseColor}40`
        }

        // Fade in/out based on age
        const fadeInDuration = p.maxAge * 0.15
        const fadeOutStart = p.maxAge * 0.6 // Start fading later
        let opacity = 1

        if (p.age < fadeInDuration) {
          opacity = p.age / fadeInDuration
        } else if (p.age > fadeOutStart) {
          opacity = 1 - ((p.age - fadeOutStart) / (p.maxAge - fadeOutStart))
        }

        opacity = Math.max(0, Math.min(1, opacity))
        
        // Update styles
        p.element.style.transform = `translate(${p.x}px, ${p.y}px)`
        p.element.style.opacity = (opacity * 0.8).toString()

        // Remove particles that have gone off screen or lived their life
        if (p.age >= p.maxAge || p.y > window.innerHeight) {
          p.element.remove()
          particles.current.splice(index, 1)
        }
      })

      requestAnimationFrame(updateParticles)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    // Handle window resize
    const handleResize = () => {
      // Clear all particles on resize to prevent visual glitches
      particles.current.forEach(p => p.element.remove())
      particles.current = []
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', handleMouseMove)
    requestAnimationFrame(updateParticles)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
      particles.current.forEach(p => p.element.remove())
      particles.current = []
    }
  }, [])

  return <div ref={trailRef} className="fixed inset-0 pointer-events-none -z-10" /> // Set to -z-10 to appear behind content
} 