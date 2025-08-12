"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const glowStyle = {
    background:
      theme === "light"
        ? "radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.03) 30%, transparent 70%)"
        : "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0.05) 30%, transparent 70%)",
    filter: "blur(20px)",
  }

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-30 transition-all duration-300"
      style={glowStyle}
    />
  )
}
