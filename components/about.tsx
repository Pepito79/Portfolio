interface AboutProps {
  data: {
    bio: string
    email: string
    social: Array<{ name: string; url: string }>
    profiles?: Array<{ name: string; url: string }>
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="container mx-auto px-4 py-16" id="about">
      <div className="max-w-3xl mx-auto">

        {/* FENÊTRE TERMINAL ÉPURÉE */}
        <div className="w-full rounded-md border border-border bg-card shadow-sm overflow-hidden">

          {/* BARRE DE TITRE MINIMALISTE */}
          <div className="bg-muted/30 px-4 py-2 flex items-center justify-between border-b border-border">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">identity.sh</span>
            <div className="w-10"></div> {/* Équilibre visuel */}
          </div>

          {/* CONTENU CLAIR */}
          <div className="p-6 md:p-10 font-mono">

            {/* COMMANDE BIO */}
            <div className="mb-8">
              <div className="flex items-center text-accent text-xs md:text-sm mb-3">
                <span className="mr-2">❯</span>
                <span>whoami</span>
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed pl-4 border-l border-accent/20">
                {data.bio}
              </p>
            </div>

            {/* INFOS DE CONTACT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border/50">

              {/* EMAIL */}
              <div>
                <div className="text-accent text-[10px] uppercase mb-2 font-bold tracking-tight">/ contact</div>
                <a
                  href={`mailto:${data.email}`}
                  className="text-sm hover:text-accent transition-colors block group"
                >
                  <span className="text-muted-foreground mr-2 group-hover:text-accent">dir:</span>
                  {data.email}
                </a>
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div>
                <div className="text-accent text-[10px] uppercase mb-2 font-bold tracking-tight">/ social_links</div>
                <div className="flex flex-wrap gap-3">
                  {[...(data.social || []), ...(data.profiles || [])].map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground flex items-center transition-colors"
                    >
                      <span className="text-accent mr-1">#</span>
                      {link.name.toLowerCase()}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* LIGNE DE COMMANDE FINALE */}
            <div className="mt-10 flex items-center">
              <span className="text-accent mr-2 animate-pulse">■</span>
              <span className="text-muted-foreground text-[10px] uppercase tracking-widest">System Ready</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}