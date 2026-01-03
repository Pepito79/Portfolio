interface ProjectsProps {
  data: {
    projects: Array<{
      title: string
      about: string
      github?: string
      post?: string | null
      image?: string
    }>
  }
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="projects">
      <div className="max-w-5xl mx-auto">
        {/* Header style "File Explorer" */}
        <div className="flex items-center gap-2 mb-8 font-mono overflow-hidden">
          <span className="text-muted-foreground opacity-50">src /</span>
          <h2 className="text-accent font-bold">projects.exe</h2>
          <div className="h-[1px] bg-border flex-grow ml-2 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects?.map((project, index) => (
            <div
              key={index}
              className="relative group bg-[#0d1117]/ border border-border rounded-sm hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              {/* Top Bar Style Fenêtre */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-card/50">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/40 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/40 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/40 transition-colors"></div>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">project_{index + 1}</span>
              </div>

              <div className="p-5 flex flex-col h-full font-mono">
                {/* Titre avec un petit curseur */}
                <h3 className="text-foreground font-bold text-base mb-3 flex items-center">
                  <span className="text-accent mr-2">❯</span>
                  {project.title}
                </h3>

                {/* Description style commentaire de code */}
                <div className="flex-grow">
                  <p className="text-muted-foreground text-xs leading-relaxed py-2 px-3 border-l border-accent/30 italic">
                    {project.about}
                  </p>
                </div>

                {/* Liens style terminal */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] text-accent hover:text-black transition-all bg-accent/5 px-3 py-1.5 rounded-sm border border-accent/20 hover:bg-accent/20"
                    >
                      <span className="opacity-70">git:</span> checkout
                    </a>
                  )}

                  {project.post && (
                    <a
                      href={project.post}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-black transition-all bg-white/5 px-3 py-1.5 rounded-sm border border-white/10 hover:bg-white/10"
                    >
                      <span className="opacity-70">cat:</span> readme.md
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}