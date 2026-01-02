export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16 border-t border-border/20">
      <div className="max-w-4xl mx-auto font-mono">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start opacity-60 hover:opacity-100 transition-opacity duration-500">

          {/* Section 1: Hash / Build ID */}
          <div className="text-left">
            <div className="text-accent text-[10px] uppercase font-bold mb-2">// deploy_info</div>
            <div className="text-muted-foreground text-[10px] space-y-1">
              <p>BUILD_ID: <span className="text-foreground">7f0a21b</span></p>
              <p>STATUS: <span className="text-green-500/80">operational</span></p>
              <p>ENV: <span className="text-foreground">production</span></p>
            </div>
          </div>

          {/* Section 2: Signature Centrale */}
          <div className="text-center flex flex-col items-center">
            <div className="text-accent text-xs font-bold mb-3">
              [ Saad @ N7 ]
            </div>
            <div className="text-[10px] text-muted-foreground leading-tight">
              Designed & Developed<br />
              from Toulouse, FR
            </div>
          </div>

          {/* Section 3: Tech Stack / Runtime */}
          <div className="text-right">
            <div className="text-accent text-[10px] uppercase font-bold mb-2">// tech_stack</div>
            <div className="text-muted-foreground text-[10px] space-y-1">
              <p>RUNTIME: <span className="text-foreground">Next.js 15</span></p>
              <p>STYLING: <span className="text-foreground">TailwindCSS</span></p>
            </div>
          </div>
        </div>

        {/* Barre de copyright finale */}
        <div className="mt-12 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground/50">
            © {new Date().getFullYear()} — NO_RIGHTS_RESERVED. Feel free to fork.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-tighter">System online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}