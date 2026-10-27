import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/config/site";
import { cn } from "@/utils/cn";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { CloseIcon, InstagramIcon, MenuIcon } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream">
      <a
        href="#beranda"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Lewati ke konten utama
      </a>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Navigasi utama"
      >
        <a href="#beranda" className="flex items-center gap-3">
          <Logo className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base leading-tight text-ink sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
              {siteConfig.locationShort}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href={whatsappUrl()} className="px-5 py-2.5">
            Hubungi Kami
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink transition-colors hover:bg-cream-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn("border-t border-ink/10 md:hidden", !open && "hidden")}
      >
        <div className="space-y-1 px-4 pb-4 pt-2 sm:px-6">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-ink/80 transition-colors hover:bg-cream-2 hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              href={whatsappUrl()}
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Hubungi Kami
            </Button>
            <Button
              href={siteConfig.instagramUrl}
              variant="outline"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              <InstagramIcon className="h-5 w-5" />
              {siteConfig.instagramHandle}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
