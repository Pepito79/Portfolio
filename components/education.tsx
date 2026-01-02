interface EducationProps {
  data: {
    education: Array<{
      school: string
      degree: string
      graduated: string
      description: string
    }>
  }
}

export default function Education({ data }: EducationProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="education">
      <div className="max-w-4xl mx-auto">
        {/* Header style Terminal */}
        <div className="flex items-center space-x-2 mb-8 font-mono">
          <span className="text-accent font-bold">$</span>
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">cat education.log</h2>
          <span className="animate-pulse bg-accent w-2 h-5"></span>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {data.education?.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Le point sur la timeline */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-border bg-background group-hover:border-accent transition-colors duration-300 z-10 absolute left-0 md:left-1/2 md:-ml-5">
                <div className="w-2 h-2 bg-accent"></div>
              </div>

              {/* Contenu de la carte */}
              <div className="w-[calc(100%-3rem)] md:w-[45%] bg-card border border-border p-5 font-mono hover:bg-accent/5 transition-all duration-300 ml-12 md:ml-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-accent text-[10px] md:text-xs font-bold uppercase">[{edu.graduated}]</span>
                  <span className="text-muted-foreground text-[10px]">v1.0.stable</span>
                </div>

                <h3 className="text-foreground font-bold text-sm md:text-base mb-1">
                  &gt; {edu.school}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm mb-3 italic">
                  // {edu.degree}
                </p>

                <div className="text-[10px] md:text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">
                  <span className="text-accent">root@saad:~$</span> {edu.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}