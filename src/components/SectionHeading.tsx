import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** "light" untuk dipakai di atas background gelap (mis. section live music) */
  tone?: "default" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const dark = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-[0.2em]",
          dark ? "text-cream/70" : "text-forest",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl",
          dark ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base sm:text-lg", dark ? "text-cream/80" : "text-ink/70")}>
          {description}
        </p>
      )}
    </div>
  );
}
