export const namaProduk = "Teko Lipat Portable";
export const Deskripsi =
  "Apakah anda sering bepergian dan butuh solusi praktis untuk memasak air? Teko Lipat Elektrik ini adalah jawabannya! Dengan desain yang inovatif dan fungsionalitas yang luar biasa, Anda bisa memasak air kapan saja dan di mana saja tanpa ribet.";
export const spesifikasi =
  "<b>Portabel & Simpel: </b>Teko ini bisa dilipat, sehingga mudah dibawa ke mana-mana. Tidak perlu khawatir lagi mencari tempat untuk memasak air saat bepergian. <br /> <b>Mudah Digunakan:</b> Hanya dengan satu kali pencet, Anda bisa memasak air dengan cepat dan efisien. <br /> <b>Desain Modern:</b> Tampil dengan desain yang elegan dan minimalis, cocok untuk digunakan di rumah, kantor, atau saat traveling. <br /> <b>Hemat Energi:</b> Konsumsi daya yang efisien membuat teko ini tidak hanya praktis tetapi juga ekonomis. <br /> <br /> ";

//   harga[0] = harga coret, harga[1] harga yang akan ditampilkan
export const harga = ["290.000", "149.990"];
const noHandphone = "6289606883082";
const pesan = `Permisi, aku tertarik untuk membeli ${namaProduk} dengan harga ${harga[1]}, apakah stoknya masih ada?`;

const pesanEncoded = encodeURIComponent(pesan);
export const waUrl = `https://wa.me/${noHandphone}?text=${pesanEncoded}`;
export const varian = ["Biru", "Pink", "Putih"];
export const gambar = ["gambar1.png", "gambar2.jpg"];
