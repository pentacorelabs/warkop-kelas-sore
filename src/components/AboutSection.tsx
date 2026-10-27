import { siteConfig } from "@/config/site";
import { ClockIcon, MapPinIcon, MusicIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { icon: MapPinIcon, text: "Berlokasi di Pamulang, Tangerang Selatan, Banten." },
  { icon: ClockIcon, text: "Buka setiap hari, 13.00–02.00 WIB." },
  { icon: MusicIcon, text: "Live music setiap Jumat & Sabtu, mulai pukul 20.00 WIB." },
];

export function AboutSection() {
  return (
    <section id="tentang" className="bg-cream-2 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-2xl bg-cream"
          />
          <img
            src={siteConfig.assets.about}
            alt="Interior Warkop Kelas Sore yang hangat dan nyaman"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Lebih dari Sekadar Tempat Ngopi."
            description="Kadang yang dibutuhkan cuma kopi, tempat yang nyaman, dan waktu buat ngobrol. Kelas Sore hadir sebagai tempat untuk menikmati jeda, bertukar cerita, dan menghabiskan waktu bersama."
          />
          <ul className="mt-8 space-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
