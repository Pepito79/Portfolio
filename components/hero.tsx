"use client"
import { useEffect, useState } from "react"

interface HeroProps {
  data: {
    name: string
    occupation: string
  }
}

export default function Hero({ data }: HeroProps) {
  const fullText = `
 ██████╗ ██╗   ██╗███████╗███████╗███████╗ ██████╗ ██╗   ██╗███████╗    ███████╗ █████╗  █████╗ ██████╗ 
██╔════╝ ██║   ██║██╔════╝██╔════╝██╔════╝██╔═══██╗██║   ██║██╔════╝    ██╔════╝██╔══██╗██╔══██╗██╔══██╗
██║  ███╗██║   ██║█████╗  ███████╗███████╗██║   ██║██║   ██║███████╗    ███████╗███████║███████║██║  ██║
██║   ██║██║   ██║██╔══╝  ╚════██║╚════██║██║   ██║██║   ██║╚════██║    ╚════██║██╔══██║██╔══██║██║  ██║
╚██████╔╝╚██████╔╝███████╗███████║███████║╚██████╔╝╚██████╔╝███████║    ███████║██║  ██║██║  ██║██████╔╝
 ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝`

  const [displayText, setDisplayText] = useState("")
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    let i = 0
    // On augmente le pas (step) pour que l'ASCII se dessine plus vite
    // tout en gardant l'aspect "chargement"
    const step = 4

    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i))
      i += step

      if (i > fullText.length) {
        setDisplayText(fullText) // Sécurité pour afficher le texte complet à la fin
        clearInterval(timer)
        setIsFinished(true)
      }
    }, 10) // Un intervalle de 10ms avec un saut de 4 caractères est plus stable pour le CPU

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center relative z-10 w-full">

        {/* Logo ASCII GRAND FORMAT */}
        <div className="font-mono leading-none mb-12 w-full flex justify-center overflow-x-auto no-scrollbar">
          <pre className="text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-accent leading-tight font-bold whitespace-pre">
            {displayText}
            {!isFinished && <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span>}
          </pre>
        </div>

        {/* Détails du profil (S'affiche après l'ASCII) */}
        <div className={`w-full max-w-2xl transition-all duration-1000 ${isFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="font-mono bg-card/40 backdrop-blur-md border border-border p-6 md:p-8 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">

            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.4em]">system_status: online</span>
              </div>
              <span className="text-[10px] text-accent/50">v2.0.26</span>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-accent text-xs font-bold w-32 tracking-[0.2em] opacity-70 border-r border-accent/20">NAME</span>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
                  {data.name}
                </h1>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-accent text-xs font-bold w-32 tracking-[0.2em] opacity-70 border-r border-accent/20">POSITION</span>
                <div className="text-lg md:text-xl text-muted-foreground flex items-center">
                  <span className="text-accent mr-3">❯</span>
                  {data.occupation}
                </div>
              </div>
            </div>

            {/* Décoration style footer de carte */}
            <div className="mt-8 flex justify-end">
              <div className="text-[9px] text-muted-foreground/30 font-bold tracking-widest uppercase">
                Enseeiht_Student_Id: 7822-SD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}