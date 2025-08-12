"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Star {
  x: number
  y: number
  z: number
  prevX: number
  prevY: number
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const speedRef = useRef(0.5)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = (count: number) => {
      const stars: Star[] = []
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
          prevX: 0,
          prevY: 0,
        })
      }
      return stars
    }

    const updateStars = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      starsRef.current.forEach((star) => {
        star.prevX = (star.x / star.z) * 100 + centerX
        star.prevY = (star.y / star.z) * 100 + centerY

        star.z -= speedRef.current

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2
          star.y = Math.random() * canvas.height - canvas.height / 2
          star.z = 1000
        }
      })
    }

    const drawStars = () => {
      const bgColor = theme === "light" ? "rgba(248, 250, 252, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      starsRef.current.forEach((star) => {
        const x = (star.x / star.z) * 100 + centerX
        const y = (star.y / star.z) * 100 + centerY

        const size = (1 - star.z / 1000) * 2
        const opacity = 1 - star.z / 1000

        const starColor = theme === "light" ? "147, 51, 234" : "147, 51, 234"
        const starOpacity = theme === "light" ? opacity * 0.8 : opacity

        // Create gradient for star glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2)
        gradient.addColorStop(0, `rgba(${starColor}, ${starOpacity})`)
        gradient.addColorStop(0.5, `rgba(${starColor}, ${starOpacity * 0.5})`)
        gradient.addColorStop(1, `rgba(${starColor}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        // Draw star trail
        if (star.prevX && star.prevY) {
          ctx.strokeStyle = `rgba(${starColor}, ${starOpacity * 0.3})`
          ctx.lineWidth = size * 0.5
          ctx.beginPath()
          ctx.moveTo(star.prevX, star.prevY)
          ctx.lineTo(x, y)
          ctx.stroke()
        }
      })
    }

    const animate = () => {
      updateStars()
      drawStars()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      starsRef.current = createStars(200)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - canvas.width / 2
      const mouseY = e.clientY - canvas.height / 2
      speedRef.current = 0.2 + Math.sqrt(mouseX * mouseX + mouseY * mouseY) / 1000
    }

    // Initialize
    resizeCanvas()
    starsRef.current = createStars(200)
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme]) // Added theme dependency to re-render on theme change

  return <canvas ref={canvasRef} className="starfield fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />
}
