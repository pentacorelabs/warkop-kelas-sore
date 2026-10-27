import { siteConfig, whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";
import { ClockIcon, InstagramIcon, MapPinIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <Logo className="h-16 w-16 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]" />
              <span className="font-serif text-xl leading-tight">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline} Berlokasi di {siteConfig.locationShort}, Banten.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60">
              Jelajahi
            </h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
              <li>
                <a
                  href={whatsappUrl()}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp: {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0" />
                  Instagram: {siteConfig.instagramHandle}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.hours.strip}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>{siteConfig.locationShort}, Banten, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
