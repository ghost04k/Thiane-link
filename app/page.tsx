import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050308] via-black to-[#1a1205] text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="relative">
          {/* Halo doré derrière la carte */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#F4D03F]/40 via-transparent to-[#F39C12]/40 blur-2xl opacity-70" />

          {/* Carte principale */}
          <article className="relative bg-gradient-to-b from-[#0B0910] via-[#050308] to-black border border-[#F4D03F]/30 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] px-6 py-7 md:px-8 md:py-9 space-y-7">
            {/* En-tête : photo + identité */}
            <header className="flex flex-col items-center text-center gap-4">
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#F4D03F]/80 shadow-[0_0_30px_rgba(244,208,63,0.35)]">
                {/* Ta photo : /public/pp.jpg */}
              <Image
                src="/pp.JPG"          // PAS "public/pp.jpg"
                alt="Portrait de Thiane NDIAYE"
                fill
                priority
                sizes="128px"
                className="object-cover"
              />

            </div>

              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight font-serif">
                  Thiane NDIAYE
                </h1>

                <div className="inline-flex items-center gap-2 rounded-full border border-[#F4D03F]/40 bg-[#151017]/80 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-[#F4D03F]" />
                  <p className="text-xs md:text-sm text-slate-100">
                    Executive Coach{" "}
                    <span className="text-slate-300">(certification ICF en cours)</span>
                  </p>
                </div>
              </div>
            </header>

            {/* Liens principaux */}
            <section className="space-y-3">
              {/* CTA principal : WhatsApp */}
              <a
                href="https://wa.me/33642587321"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#F4D03F] via-[#F5B041] to-[#D68910] text-black font-medium shadow-[0_10px_30px_rgba(244,208,63,0.45)] hover:shadow-[0_14px_40px_rgba(244,208,63,0.6)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-black/10 p-1.5">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span>Séance Découverte</span>
                    <span className="text-xs opacity-80">
                      45 minutes — Réserver sur WhatsApp
                    </span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wide opacity-80 group-hover:opacity-100">
                  Réserver
                </span>
              </a>

              {/* Lien Instagram */}
              <a
                href="https://www.instagram.com/youbeyoupodcasts?igsh=MWo0cHJreDZjN3k4NA=="
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-[#0C0913]/90 border border-[#F4D03F]/40 hover:border-[#F4D03F]/70 hover:bg-[#15101F] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#F4D03F]/10 p-1.5">
                    <Instagram className="w-5 h-5" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium">Podcast You Be You</span>
                    <span className="text-xs text-slate-300">@youbeyoupodcasts</span>
                  </div>
                </div>
                <span className="text-xs text-[#F4D03F]/90 group-hover:text-[#F4D03F]">
                  Voir
                </span>
              </a>
            </section>

            {/* Séparateur doré */}
            <div className="relative pt-3">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F4D03F]/50 to-transparent" />
            </div>

            {/* Texte de présentation */}
            <section className="space-y-4 text-sm md:text-[15px] leading-relaxed text-slate-200">
              <p>
                Ancienne Directrice Commerciale dans l’imagerie médicale, j’ai 12 ans
                d’expérience dans le commerce international.
              </p>
              <p>
                Fondatrice du podcast{" "}
                <span className="font-medium text-[#F4D03F]">You Be You</span>, j’explore les thèmes
                du leadership et du développement personnel auprès de la diaspora ouest-africaine.
              </p>
              <p>
                Sénégalaise, passionnée de cultures et de rencontres, je parle 5 langues et ai
                voyagé dans plus de 24 pays. Cette ouverture façonne aujourd’hui ma pratique du
                coaching, centrée sur l’humain, l’impact et la clarté professionnelle.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#F4D03F]">
                    J’accompagne
                  </p>
                  <p className="text-sm">
                    Jeunes entrepreneurs & salariés, en France et dans la diaspora africaine, en
                    particulier les femmes.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#F4D03F]">
                    Services
                  </p>
                  <p className="text-sm">Coaching professionnel • Développement personnel</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#F4D03F]">
                  Offres
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Séance Découverte — 45 minutes</li>
                  <li>Programme de 5 séances d’accompagnement personnalisé</li>
                </ul>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-1">
              <p className="text-[11px] text-slate-400 text-center">
                You Be You • Coaching &amp; Leadership
              </p>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}