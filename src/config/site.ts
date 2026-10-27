/**
 * Warkop Kelas Sore — konfigurasi utama website.
 *
 * Seluruh informasi bisnis yang sering diubah (nama, kontak, menu, jam buka,
 * alamat, jadwal live music, dan path aset gambar) tersimpan di file ini
 * agar mudah diedit tanpa menyentuh komponen.
 */

import { logoDataUri } from "@/assets/logo-data";

export const siteConfig = {
  /** Nama bisnis */
  name: "Warkop Kelas Sore",
  /** Nama panggilan untuk tampilan yang lebih ringkas */
  shortName: "Kelas Sore",
  /** Tagline singkat */
  tagline: "Tempat singgah, cerita bertambah.",
  /** Lokasi singkat */
  locationShort: "Pamulang, Tangerang Selatan",

  /**
   * Aset gambar — ganti path di bawah dengan aset resmi dari klien.
   * Struktur folder: public/images/
   */
  assets: {
    /**
     * Logo resmi (lencana bundar) — tertanam di src/assets/logo-data.ts
     * sehingga selalu ikut ter-build. Dipakai oleh <Logo /> (Navbar, Footer,
     * CTA) dan sebagai favicon.
     * Untuk mengganti: simpan file baru (rasio 1:1) di public/images/logo.png,
     * lalu ubah nilai ini menjadi "/images/logo.png".
     */
    logo: logoDataUri as string,
    hero: "/images/hero.jpg",
    about: "/images/about.jpg",
    liveMusic: "/images/live-music.jpg",
  },

  /** Kontak WhatsApp */
  whatsapp: {
    /** Nomor seperti yang tertera (format lokal) */
    display: "087899217401",
    /** Format internasional tanpa tanda +, untuk wa.me */
    number: "6287899217401",
    /** Pesan yang sudah terisi saat chat pertama kali dibuka */
    defaultMessage: "Halo Kelas Sore! Saya ingin bertanya tentang menu dan informasi lainnya.",
  },

  /**
   * Instagram resmi — @kelassore.pmg
   * `instagramUrl` dipakai untuk semua tautan/tombol,
   * `instagramHandle` dipakai untuk teks tampilan di halaman.
   */
  instagramUrl: "https://www.instagram.com/kelassore.pmg/",
  instagramHandle: "@kelassore.pmg",

  /** Alamat & tautan peta */
  address: {
    full: "MP9+2GM Warkop Kelas Sore, Jl. Lele 5, Bambu Apus, Kec. Pamulang, Kota Tangerang Selatan, Banten 15417",
    area: "Pamulang, Tangerang Selatan",
    /** Tautan eksternal untuk tombol "Buka di Google Maps" */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=MP9%2B2GM%20Warkop%20Kelas%20Sore%2C%20Jl.%20Lele%205%2C%20Bambu%20Apus%2C%20Pamulang%2C%20Tangerang%20Selatan%2C%20Banten%2015417",
    /** Versi embed berbasis pencarian (tanpa API key) untuk peta di halaman */
    mapsEmbedUrl:
      "https://www.google.com/maps?q=MP9%2B2GM%20Warkop%20Kelas%20Sore%2C%20Jl.%20Lele%205%2C%20Bambu%20Apus%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015417&output=embed",
  },

  /** Jam operasional */
  hours: {
    days: "Setiap Hari",
    open: "13.00",
    close: "02.00",
    /** Strip informasi kecil di hero */
    strip: "Buka Setiap Hari · 13.00–02.00 WIB",
    /** Penjelasan jam tutup (02.00 pada hari berikutnya) */
    note: "Buka pukul 13.00, tutup pukul 02.00 dini hari (hari berikutnya).",
  },

  /** Jadwal live music */
  liveMusic: {
    label: "Live Music",
    schedule: "Setiap Jumat & Sabtu",
    time: "Mulai pukul 20.00 WIB",
    description: "Nikmati suasana nongkrong dengan iringan musik live di Kelas Sore.",
  },

  /**
   * Kategori menu — disusun mengikuti urutan pada daftar harga resmi klien.
   * `id` dipakai untuk anchor/filter, `name` untuk judul kategori.
   */
  menuCategories: [
    { id: "nasi", name: "Nasi" },
    { id: "warkop", name: "Warkop" },
    { id: "refresher", name: "Refresher" },
    { id: "snacks", name: "Snacks" },
    { id: "indomie", name: "Indomie" },
    { id: "add-on", name: "Add On" },
  ],

  /** Menu: nama item, harga (dalam ribuan rupiah), dan catatan varian opsional. */
  menu: [
    {
      name: "Nasi Goreng Sosis",
      price: 18,
    },
    {
      name: "Nasi Goreng Ayam",
      price: 20,
    },
    {
      name: "Nasi Goreng Spesial",
      price: 25,
    },
    {
      name: "Nasi Telor Crispy",
      price: 15,
    },
    {
      name: "Scrambled Egg Rice Bowl",
      price: 15,
    },
    {
      name: "Chicken Bite Rice Bowl",
      price: 23,
      note: "Asam Manis/Black Pepper",
    },
    {
      name: "Chicken Katsu Rice Bowl",
      price: 23,
      note: "Sambal Matah/Geprek",
    },
    {
      name: "Chicken Wings Rice Bowl",
      price: 25,
    },
    {
      name: "Ayam Goreng Sambal Ijo",
      price: 35,
    },
    {
      name: "Telur",
      price: 5,
    },
    {
      name: "Sambal/Saus",
      price: 5,
      note: "Geprek, Ijo, Asam-manis, Black Pepper",
    },
    {
      name: "Kopi Hitam",
      price: 7,
    },
    {
      name: "Good Day",
      price: 8,
      note: "Butterscotch, Cappuccino, Latte, Freeze",
    },
    {
      name: "Tora Bika Cappuccino",
      price: 8,
    },
    {
      name: "Drink Beng-Beng",
      price: 10,
    },
    {
      name: "Nutrisari",
      price: 8,
      note: "Jeruk Peras, Jeruk Nipis, Blewah",
    },
    {
      name: "Chocolatos Matcha",
      price: 8,
    },
    {
      name: "ABC Klepon",
      price: 8,
    },
    {
      name: "Wedang Jahe",
      price: 8,
    },
    {
      name: "Susu Kental Manis",
      price: 8,
    },
    {
      name: "Milo",
      price: 10,
    },
    {
      name: "Kuku Bima Susu",
      price: 12,
    },
    {
      name: "Nesscafe",
      price: 10,
      note: "Ice Roast",
    },
    {
      name: "Fanta Susu",
      price: 15,
    },
    {
      name: "Soda Susu",
      price: 15,
    },
    {
      name: "Mango Squash",
      price: 18,
    },
    {
      name: "Lychee Squash",
      price: 18,
    },
    {
      name: "Mango Yakult",
      price: 18,
    },
    {
      name: "Lychee Yakult",
      price: 18,
    },
    {
      name: "Jeruk Peras",
      price: 15,
    },
    {
      name: "French Fries",
      price: 15,
    },
    {
      name: "Otak-otak",
      price: 15,
    },
    {
      name: "Sosis",
      price: 15,
    },
    {
      name: "Cireng Rujak",
      price: 15,
    },
    {
      name: "Banana Nugget",
      price: 15,
    },
    {
      name: "Pisang Bakar",
      price: 15,
    },
    {
      name: "Roti Bakar",
      price: 15,
      note: "Cokelat/Tiramisu/Green Tea/Cokelat,Keju,Susu",
    },
    {
      name: "Snack Platter",
      price: 18,
    },
    {
      name: "Indomie Polos",
      price: 10,
    },
    {
      name: "Indomie Telor",
      price: 15,
    },
    {
      name: "Internet",
      price: 18,
    },
    {
      name: "Internetju",
      price: 21,
    },
    {
      name: "Duoble Polos",
      price: 15,
    },
    {
      name: "Duoble Telor",
      price: 20,
    },
    {
      name: "Duoble Internet",
      price: 25,
    },
    {
      name: "Duoble Internetju",
      price: 30,
    },
    {
      name: "Mi Nyemek",
      price: 17,
    },
    {
      name: "Mi Bangladesh",
      price: 17,
    },
    {
      name: "Mi Dok-Dok",
      price: 17,
    },
  ],

  /** Tautan navigasi utama */
  navLinks: [
    { label: "Beranda", href: "#beranda" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Lokasi", href: "#lokasi" },
  ],
};

/**
 * Membuat tautan WhatsApp (wa.me) dengan pesan yang sudah terisi.
 * Pesan default dapat diubah di siteConfig.whatsapp.defaultMessage.
 */
export function whatsappUrl(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
