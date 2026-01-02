interface ContactProps {
  data: {
    contactmessage: string
    email: string
    address: {
      city: string
      state: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="contact">
      <div className="max-w-3xl mx-auto">
        {/* Header style "Terminal tab" */}
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <div className="text-[10px] md:text-xs opacity-50 mb-2">// connection_established: true</div>
          <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase underline decoration-accent decoration-2 underline-offset-8">
            Get In Touch
          </h2>
        </div>

        <div className="group relative border border-border bg-[#0d1117]/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/40 shadow-2xl shadow-black/50">
          {/* Header de la fenêtre style terminal */}
          <div className="bg-card/80 border-b border-border px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="font-mono text-[10px] text-muted-foreground">contact_daemon --port 3000</div>
          </div>

          <div className="p-8 md:p-12 font-mono flex flex-col items-center text-center">
            {/* Message de bienvenue style logs */}
            <div className="mb-8 w-full">
              <span className="text-accent text-sm">&gt; </span>
              <span className="text-muted-foreground text-sm leading-relaxed">
                {data.contactmessage}
              </span>
            </div>

            {/* Bouton d'action principal style commande terminal */}
            <a
              href={`mailto:${data.email}`}
              className="relative px-8 py-4 bg-transparent border border-accent text-accent text-sm md:text-base font-bold hover:bg-accent hover:text-background transition-all duration-300 group-hover:scale-105"
            >
              <span className="mr-2">$</span>
              send_email --to "{data.email}"

              {/* Effet de scanline sur le bouton */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent opacity-20"></div>
            </a>

            {/* Localisation style système de fichiers */}
            <div className="mt-10 flex items-center text-[10px] md:text-xs text-muted-foreground/60 gap-4">
              <div className="flex items-center">
                <span className="text-accent mr-1">location:</span>
                {data.address.city}, {data.address.state}
              </div>
              <div className="hidden md:block h-3 w-[1px] bg-border"></div>
              <div className="hidden md:flex items-center">
                <span className="text-accent mr-1">status:</span>
                open_to_collaborations
              </div>
            </div>
          </div>

          {/* Décoration ASCII discrète en arrière-plan */}
          <div className="absolute bottom-2 right-4 pointer-events-none select-none text-[8px] text-accent/5 font-mono">
            SSH-RSA 4096 SAAD-PORTFOLIO-2026
          </div>
        </div>

        {/* Footer de section */}
        <div className="mt-8 font-mono text-center">
          <div className="text-[10px] text-muted-foreground animate-pulse">
            Waiting for input...<span className="inline-block w-2 h-3 bg-accent ml-1"></span>
          </div>
        </div>
      </div>
    </section>
  )
}