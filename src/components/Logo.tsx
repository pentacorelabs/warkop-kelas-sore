import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  /** Teks alternatif untuk pembaca layar */
  title?: string;
}

/**
 * Logo resmi Warkop Kelas Sore (lencana bundar).
 *
 * Gambar diambil dari `siteConfig.assets.logo` (tertanam di src/assets/logo-data.ts).
 * Ukuran ditentukan oleh `className` pemanggil (mis. "h-12 w-12");
 * width/height bawaan menjaga rasio 1:1 sehingga tidak ada layout shift.
 */
export function Logo({ className, title = "Logo Warkop Kelas Sore" }: LogoProps) {
  return (
    <img
      src={siteConfig.assets.logo}
      alt={title}
      width={512}
      height={512}
      decoding="async"
      className={cn("block aspect-square object-contain", className)}
    />
  );
}
