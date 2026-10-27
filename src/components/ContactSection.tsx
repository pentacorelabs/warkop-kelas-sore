import { siteConfig, whatsappUrl } from "@/config/site";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function ContactSection() {
  return (
    <section id="kontak" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Logo className="mx-auto h-28 w-28 sm:h-36 sm:w-36" />
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-forest">
          Sampai Jumpa
        </p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          Ketemu di Kelas Sore, Yuk.
        </h2>
        <p className="mt-4 text-base text-ink/70 sm:text-lg">
          Atur waktu, ajak teman, dan nikmati suasana Kelas Sore.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={whatsappUrl()}>
            <WhatsAppIcon className="h-5 w-5" />
            Chat via WhatsApp
          </Button>
          <Button href={siteConfig.instagramUrl} variant="outline">
            <InstagramIcon className="h-5 w-5" />
            Ikuti Instagram Kami
          </Button>
        </div>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-forest"
        >
          <InstagramIcon className="h-4 w-4" />
          {siteConfig.instagramHandle}
        </a>
      </div>
    </section>
  );
}
