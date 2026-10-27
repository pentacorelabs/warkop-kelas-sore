import { siteConfig } from "@/config/site";
import { Button } from "./Button";
import { ArrowRightIcon, ClockIcon, MusicIcon } from "./icons";

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
            Warkop · {siteConfig.locationShort}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Tempat Singgah,{" "}
            <span className="italic text-forest">Cerita Bertambah.</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-ink/70 sm:text-lg">
            Tempat ngopi dan menghabiskan waktu bersama, dari obrolan sore hingga larut
            malam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#menu">
              Lihat Menu
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="#lokasi" variant="outline">
              Temukan Lokasi
            </Button>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink/70">
            <ClockIcon className="h-4 w-4 text-forest" />
            {siteConfig.hours.strip}
          </p>
        </div>

        <div className="relative fade-up fade-up-delay">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 -translate-y-3 rounded-2xl bg-cream-2"
          />
          <img
            src={siteConfig.assets.hero}
            alt="Suasana nyaman dan hangat di Warkop Kelas Sore pada sore hari"
            fetchPriority="high"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-lg lg:aspect-[4/5]"
          />
          <div className="absolute -bottom-4 left-4 flex items-center gap-2.5 rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink shadow-md">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-cream">
              <MusicIcon className="h-4 w-4" />
            </span>
            Live Music · Jumat &amp; Sabtu, 20.00 WIB
          </div>
        </div>
      </div>
    </section>
  );
}
