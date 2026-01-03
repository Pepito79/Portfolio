"use client"

import { useEffect, useState } from "react"
// IMPORT DIRECT DU JSON
import resumeData from "../public/resumeData.json"

import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  const [isDark, setIsDark] = useState(true)

  // Gestion du thème (on garde le useEffect car localStorage est lié au navigateur)
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  // NOTE: On utilise directement 'resumeData' au lieu de 'data'
  return (
    <main className="min-h-screen bg-background relative">
      {/* NAVBAR FIXE STYLE TERMINAL */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center font-mono text-[10px] md:text-xs">
          <div className="flex items-center gap-4">
            <span className="text-accent font-bold">SAAD@GUES:~$</span>
            <div className="hidden md:flex gap-4 text-muted-foreground uppercase tracking-tighter">
              <a href="#about" className="hover:text-accent transition-colors">[about]</a>
              <a href="#experience" className="hover:text-accent transition-colors">[work]</a>
              <a href="#projects" className="hover:text-accent transition-colors">[projects]</a>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="border border-border px-3 py-1 hover:border-accent hover:text-accent transition-all bg-card/50"
          >
            {isDark ? "GUI: OFF (DARK)" : "GUI: ON (LIGHT)"}
          </button>
        </div>
      </nav>

      {/* AJOUT D'UN PADDING TOP POUR LA NAVBAR */}
      <div className="pt-12">
        <Hero data={resumeData.main} />
        <About data={resumeData.main} />
        <Experience data={resumeData.resume} />
        <Projects data={resumeData.portfolio} />
        {/* <Skills data={resumeData.resume} /> */}
        <Education data={resumeData.resume} />
        <Contact data={resumeData.main} />
        <Footer />
      </div>
    </main>
  )
}