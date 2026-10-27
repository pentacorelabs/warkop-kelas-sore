import { siteConfig, whatsappUrl } from "@/config/site";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";

/**
 * Peta item menu ke kategori, mengikuti urutan pada daftar harga resmi.
 * Item tanpanote/varian tetap diproses.
 */
const CATEGORY_ORDER: { id: string; name: string; items: string[] }[] = [
  {
    id: "nasi",
    name: "Nasi",
    items: [
      "Nasi Goreng Sosis",
      "Nasi Goreng Ayam",
      "Nasi Goreng Spesial",
      "Nasi Telor Crispy",
      "Scrambled Egg Rice Bowl",
      "Chicken Bite Rice Bowl",
      "Chicken Katsu Rice Bowl",
      "Chicken Wings Rice Bowl",
      "Ayam Goreng Sambal Ijo",
    ],
  },
  {
    id: "warkop",
    name: "Warkop",
    items: [
      "Kopi Hitam",
      "Good Day",
      "Tora Bika Cappuccino",
      "Drink Beng-Beng",
      "Nutrisari",
      "Chocolatos Matcha",
      "ABC Klepon",
      "Wedang Jahe",
      "Susu Kental Manis",
      "Milo",
      "Kuku Bima Susu",
      "Nesscafe",
    ],
  },
  {
    id: "refresher",
    name: "Refresher",
    items: [
      "Fanta Susu",
      "Soda Susu",
      "Mango Squash",
      "Lychee Squash",
      "Mango Yakult",
      "Lychee Yakult",
      "Jeruk Peras",
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      "French Fries",
      "Otak-otak",
      "Sosis",
      "Cireng Rujak",
      "Banana Nugget",
      "Pisang Bakar",
      "Roti Bakar",
      "Snack Platter",
    ],
  },
  {
    id: "indomie",
    name: "Indomie",
    items: [
      "Indomie Polos",
      "Indomie Telor",
      "Internet",
      "Internetju",
      "Duoble Polos",
      "Duoble Telor",
      "Duoble Internet",
      "Duoble Internetju",
      "Mi Nyemek",
      "Mi Bangladesh",
      "Mi Dok-Dok",
    ],
  },
  {
    id: "add-on",
    name: "Add On",
    items: ["Telur", "Sambal/Saus"],
  },
];

const itemByName = new Map(siteConfig.menu.map((item) => [item.name, item]));

/** Format harga ke ribuan rupiah, contoh: 18 -> "18k" */
function formatPrice(price: number): string {
  return `${price}k`;
}

export function MenuSection() {
  return (
    <section id="menu" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Menu Unggulan"
          title="Teman Setiap Cerita."
          description="Temukan pilihan menu untuk menemani waktu santai dan obrolan panjangmu."
        />

        {/* Navigasi kategori — anchor halus, tetap berfungsi tanpa JavaScript */}
        <nav
          aria-label="Kategori menu"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {CATEGORY_ORDER.map((category) => (
            <a
              key={category.id}
              href={`#menu-${category.id}`}
              className="rounded-btn border border-ink/20 px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:border-forest hover:bg-forest hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              {category.name}
            </a>
          ))}
        </nav>

        {/* Daftar menu */}
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {CATEGORY_ORDER.map((category) => (
            <div
              key={category.id}
              id={`menu-${category.id}`}
              className="scroll-mt-28"
            >
              <div className="flex items-baseline gap-3 border-b-2 border-forest pb-2">
                <h3 className="font-serif text-2xl uppercase tracking-wide text-forest">
                  {category.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                  {category.items.length} menu
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {category.items.map((name) => {
                  const item = itemByName.get(name);
                  if (!item) return null;
                  return (
                    <li key={name} className="group">
                      <div className="flex items-baseline gap-3">
                        <span className="text-base font-medium text-ink transition-colors group-hover:text-forest">
                          {item.name}
                        </span>
                        {/* Garis pemandu putus-putus menuju harga */}
                        <span
                          aria-hidden="true"
                          className="min-w-4 flex-1 translate-y-[-3px] border-b border-dashed border-ink/20"
                        />
                        <span className="shrink-0 whitespace-nowrap font-semibold text-forest">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      {item.note && (
                        <p className="mt-0.5 text-sm italic text-ink/55">
                          ({item.note})
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ink/60">
          Harga dalam ribuan rupiah (Rp). Harga dapat berubah — silakan konfirmasi
          ke kasir.
        </p>

        <div className="mt-8 text-center">
          <Button
            href={whatsappUrl("Halo Kelas Sore! Saya ingin bertanya tentang menu.")}
            variant="outline"
          >
            Tanya Menu via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
