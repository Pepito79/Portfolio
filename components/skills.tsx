interface SkillsProps {
  data: {
    skills: Array<{
      name: string
      level: string // Ex: "90%", "Expert", "Advanced"
    }>
  }
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="skills">
      <div className="max-w-4xl mx-auto">
        {/* Header style "System Check" */}
        <div className="flex items-center gap-3 mb-8 font-mono">
          <div className="px-2 py-1 bg-accent text-background text-xs font-bold">STATUS</div>
          <h2 className="text-sm md:text-base font-bold uppercase tracking-tight">
            Capabilities_Manifest.v2
          </h2>
          <div className="h-px flex-grow bg-border/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.skills?.map((skill, index) => (
            <div
              key={index}
              className="group border border-border bg-card/30 p-3 hover:bg-accent/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background décoratif (numéro de ligne) */}
              <span className="absolute right-2 top-1 text-[8px] font-mono opacity-20 group-hover:opacity-40 transition-opacity">
                ID_{index.toString().padStart(2, '0')}
              </span>

              <div className="font-mono flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-accent animate-pulse">#</span>
                    <span className="text-foreground font-bold text-xs md:text-sm">{skill.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase opacity-70">
                    {skill.level}
                  </span>
                </div>

                {/* Barre de progression style Terminal [====>] */}
                <div className="flex items-center gap-2 text-accent/30 font-bold text-[10px] md:text-xs overflow-hidden whitespace-nowrap">
                  <span className="text-accent">[</span>
                  <span className="text-accent tracking-tighter">
                    {"=".repeat(Math.floor(parseInt(skill.level) / 10))}
                    <span className="text-muted-foreground opacity-30">
                      {".".repeat(10 - Math.floor(parseInt(skill.level) / 10))}
                    </span>
                  </span>
                  <span className="text-accent">]</span>
                  <span className="text-[9px] text-muted-foreground group-hover:text-accent transition-colors">
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer style Terminal */}
        <div className="mt-6 font-mono text-[10px] text-muted-foreground/50 italic text-right">
          * Skills are hot-reloaded based on project requirements
        </div>
      </div>
    </section>
  )
}