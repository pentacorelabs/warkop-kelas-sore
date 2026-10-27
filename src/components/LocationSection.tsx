import { siteConfig, whatsappUrl } from "@/config/site";
import { Button } from "./Button";
import { ClockIcon, MapPinIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function LocationSection() {
  const { address, hours } = siteConfig;

  return (
    <section id="lokasi" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Lokasi & Jam Buka" title="Mampir ke Kelas Sore." />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-ink/10 lg:col-span-3">
            <iframe
              src={address.mapsEmbedUrl}
              title="Peta lokasi Warkop Kelas Sore di Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl bg-cream-2 p-6 lg:col-span-2 lg:p-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
                Alamat
              </h3>
              <p className="mt-2 flex gap-2 text-ink/80">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <span>
                  {address.full}
                  <br />
                  <span className="text-sm text-ink/60">Area: {address.area}, Banten.</span>
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
                Jam Buka
              </h3>
              <p className="mt-2 flex gap-2 text-ink/80">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <span>
                  Setiap hari, {hours.open}–{hours.close} WIB
                  <br />
                  <span className="text-sm text-ink/60">{hours.note}</span>
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={address.mapsUrl}>Buka di Google Maps</Button>
              <Button href={whatsappUrl()} variant="outline">
                Chat WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
