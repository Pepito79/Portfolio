interface ExperienceProps {
  data: {
    work: Array<{
      company: string
      title: string
      years: string
    }>
  }
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Header style "Process Status" */}
        <div className="flex items-center space-x-3 mb-10 font-mono">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-accent animate-pulse"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-tighter">
            ./work_history --verbose
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-accent/50 to-transparent"></div>
        </div>

        <div className="space-y-6 font-mono">
          {data.work?.map((job, index) => (
            <div
              key={index}
              className="group relative border-l-2 border-border hover:border-accent transition-all duration-500 pl-6 md:pl-10 py-2"
            >
              {/* Le "point de commit" sur la ligne */}
              <div className="absolute -left-[9px] top-6 w-4 h-4 bg-background border-2 border-border group-hover:border-accent group-hover:scale-125 transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent font-bold text-sm md:text-base tracking-tight">
                    @ {job.company}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-card text-muted-foreground group-hover:border-accent/50 transition-colors">
                    stable_release
                  </span>
                </div>
                <span className="text-xs text-muted-foreground bg-border/30 px-2 py-1 md:bg-transparent">
                  [{job.years}]
                </span>
              </div>

              <div className="relative">
                <h3 className="text-foreground font-semibold text-sm md:text-base flex items-center">
                  <span className="text-muted-foreground/50 mr-2">role:</span>
                  {job.title}
                </h3>

                {/* Petit effet de ligne de code pour le style */}
                <div className="mt-3 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center text-[10px] text-accent/70">
                    <span className="mr-1">●</span> Active
                  </div>
                  <div className="flex items-center text-[10px] text-muted-foreground">
                    <span className="mr-1">○</span> Full-stack
                  </div>
                </div>
              </div>

              {/* Décoration de coin pour le style "UI de code" */}
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-10 group-hover:translate-x-2 transition-all duration-500">
                <pre className="text-[40px] font-bold">EXP</pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 font-mono text-[10px] text-muted-foreground text-center italic">
          -- end of stack trace --
        </div>
      </div>
    </section>
  )
}