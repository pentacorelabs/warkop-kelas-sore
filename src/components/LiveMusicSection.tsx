import { siteConfig } from "@/config/site";
import { ClockIcon, MusicIcon } from "./icons";

export function LiveMusicSection() {
  const { liveMusic } = siteConfig;

  return (
    <section id="live-music" className="bg-forest py-16 text-cream sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cream/70">
            <MusicIcon className="h-4 w-4" />
            Suasana Kelas Sore
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-cream sm:text-6xl lg:text-7xl">
            LIVE MUSIC
          </h2>
          <p className="mt-5 font-serif text-2xl italic text-cream/90 sm:text-3xl">
            {liveMusic.schedule}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/30 px-4 py-2 text-sm font-medium text-cream">
            <ClockIcon className="h-4 w-4" />
            {liveMusic.time}
          </p>
          <p className="mt-6 max-w-md text-base text-cream/80">{liveMusic.description}</p>
        </div>

        <div className="relative">
          {/* Bingkai krem tipis + bayangan agar foto menyatu dengan section hijau tua */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 -translate-y-2.5 rounded-2xl border border-cream/25"
          />
          <img
            src={siteConfig.assets.liveMusic}
            alt="Band performing live on stage at Warkop Kelas Sore with the KELAS SORE banner"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-2xl border border-cream/20 object-cover shadow-2xl"
          />
          <p className="absolute -bottom-3 left-4 rounded-full bg-cream px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-forest shadow-md">
            Setiap Jumat &amp; Sabtu
          </p>
        </div>
      </div>
    </section>
  );
}
