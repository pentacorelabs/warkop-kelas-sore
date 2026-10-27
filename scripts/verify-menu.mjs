import fs from "node:fs";

/**
 * Verifikasi silang: data di src/config/site.ts vs daftar harga pada
 * 3 gambar referensi (source of truth).
 * Jalankan: node scripts/verify-menu.mjs
 */
const reference = {
  Nasi: [
    ["Nasi Goreng Sosis", 18],
    ["Nasi Goreng Ayam", 20],
    ["Nasi Goreng Spesial", 25],
    ["Nasi Telor Crispy", 15],
    ["Scrambled Egg Rice Bowl", 15],
    ["Chicken Bite Rice Bowl", 23],
    ["Chicken Katsu Rice Bowl", 23],
    ["Chicken Wings Rice Bowl", 25],
    ["Ayam Goreng Sambal Ijo", 35],
  ],
  "Add On": [
    ["Telur", 5],
    ["Sambal/Saus", 5],
  ],
  Warkop: [
    ["Kopi Hitam", 7],
    ["Good Day", 8],
    ["Tora Bika Cappuccino", 8],
    ["Drink Beng-Beng", 10],
    ["Nutrisari", 8],
    ["Chocolatos Matcha", 8],
    ["ABC Klepon", 8],
    ["Wedang Jahe", 8],
    ["Susu Kental Manis", 8],
    ["Milo", 10],
    ["Kuku Bima Susu", 12],
    ["Nesscafe", 10],
  ],
  Refresher: [
    ["Fanta Susu", 15],
    ["Soda Susu", 15],
    ["Mango Squash", 18],
    ["Lychee Squash", 18],
    ["Mango Yakult", 18],
    ["Lychee Yakult", 18],
    ["Jeruk Peras", 15],
  ],
  Snacks: [
    ["French Fries", 15],
    ["Otak-otak", 15],
    ["Sosis", 15],
    ["Cireng Rujak", 15],
    ["Banana Nugget", 15],
    ["Pisang Bakar", 15],
    ["Roti Bakar", 15],
    ["Snack Platter", 18],
  ],
  Indomie: [
    ["Indomie Polos", 10],
    ["Indomie Telor", 15],
    ["Internet", 18],
    ["Internetju", 21],
    ["Duoble Polos", 15],
    ["Duoble Telor", 20],
    ["Duoble Internet", 25],
    ["Duoble Internetju", 30],
    ["Mi Nyemek", 17],
    ["Mi Bangladesh", 17],
    ["Mi Dok-Dok", 17],
  ],
};

const cfg = fs.readFileSync("src/config/site.ts", "utf8");
const sec = cfg.slice(cfg.indexOf("menu: ["));
const re = /name:\s*"([^"]+)",\s*\n\s*price:\s*(\d+),(?:\s*\n\s*note:\s*"([^"]+)")?/g;
const actual = [];
let m;
while ((m = re.exec(sec))) actual.push([m[1], Number(m[2]), m[3] || ""]);

// Urutan di config: Nasi(9), Add On(2), Warkop(12), Refresher(7), Snacks(8), Indomie(11)
const groups = {
  Nasi: actual.slice(0, 9),
  "Add On": actual.slice(9, 11),
  Warkop: actual.slice(11, 23),
  Refresher: actual.slice(23, 30),
  Snacks: actual.slice(30, 38),
  Indomie: actual.slice(38, 49),
};

let fail = 0;
for (const cat of Object.keys(reference)) {
  const ref = reference[cat];
  const got = groups[cat];
  console.log(`--- ${cat} (${ref.length} item) ---`);
  ref.forEach(([name, price], i) => {
    const a = got[i];
    if (!a || a[0] !== name || a[1] !== price) {
      fail++;
      console.log(`  MISMATCH: ref "${name}" ${price}  vs  cfg ${JSON.stringify(a)}`);
    }
  });
  const ok = got.every((a, i) => ref[i] && ref[i][0] === a[0] && ref[i][1] === a[1]);
  console.log(`  config: ${got.length} item | nama & harga: ${ok ? "SEMUA COCOK" : "ADA YANG SALAH"}`);
}

const totalRef = Object.values(reference).flat().length;
console.log("");
console.log(`Total gambar referensi: ${totalRef} | Total di config: ${actual.length}`);
console.log(
  fail === 0 && totalRef === actual.length
    ? "=== SEMUA ITEM & HARGA COCOK DENGAN GAMBAR ==="
    : `=== ${fail} MISMATCH / jumlah tidak sama ===`,
);
process.exit(fail === 0 && totalRef === actual.length ? 0 : 1);
