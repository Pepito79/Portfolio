"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface ResumeData {
  main: any
  resume: any
  portfolio: any
}

export default function Page() {
  const [data, setData] = useState<ResumeData | null>(null)
  const [isDark, setIsDark] = useState(true)

  // Gestion du thème
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

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("[v0] Failed to load resume data:", err))
  }, [])

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="font-mono text-sm text-accent animate-pulse">
          <pre className="text-center">
            {`╔════════════════╗
║   LOADING...   ║
╚════════════════╝`}
          </pre>
        </div>
      </div>
    )
  }

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
        <Hero data={data.main} />
        <About data={data.main} />
        <Experience data={data.resume} />
        <Projects data={data.portfolio} />
        {/* <Skills data={data.resume} /> */}
        <Education data={data.resume} />
        <Contact data={data.main} />
        <Footer />
      </div>
    </main>
  )
}