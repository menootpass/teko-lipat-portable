import Image from "next/image";
import GopayIcon from "../components/svg/gopay.svg";
import DanaIcon from "../components/svg/dana.svg";
import BriIcon from "../components/svg/bri.svg";
import FlipIcon from "../components/svg/flip.svg";

export default function Home() {
  return (
    <main>
      <div class="max-w-4xl mx-auto p-4">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <center className="size-24">
            <Image
              src={"/img/logo.png"}
              alt="Logo"
              class="rounded-lg w-full"
              width={24000}
              height={24000}
            ></Image>
          </center>
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <Image
                src={"/img/gambar1.png"}
                alt="Teko Lipat Portable"
                class="rounded-lg w-full"
                width={554}
                height={554}
              ></Image>
            </div>
            <div class="md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h1 class="text-2xl font-bold">Teko Lipat Portable</h1>
              <div class="mt-2">
                <span class="text-gray-500 line-through">Rp. 290.000</span>
                <span class="text-red-500 text-2xl font-bold">Rp. 149.900</span>
              </div>
              <p class="mt-4 text-gray-700">
                Apakah anda sering bepergian dan butuh solusi praktis untuk
                memasak air? Teko Lipat Elektrik ini adalah jawabannya! Dengan
                desain yang inovatif dan fungsionalitas yang luar biasa, Anda
                bisa memasak air kapan saja dan di mana saja tanpa ribet.
              </p>
              <p class="mt-4 text-gray-700">
                {/* <b className="text-2xl font-extrabold">Manfaat Utama:</b> <br /> */}
                <b>Portabel & Simpel: </b>Teko ini bisa dilipat, sehingga mudah
                dibawa ke mana-mana. Tidak perlu khawatir lagi mencari tempat
                untuk memasak air saat bepergian. <br />
                <b>Mudah Digunakan:</b> Hanya dengan satu kali pencet, Anda bisa
                memasak air dengan cepat dan efisien.
                <br />
                <b>Desain Modern:</b> Tampil dengan desain yang elegan dan
                minimalis, cocok untuk digunakan di rumah, kantor, atau saat
                traveling.
                <br />
                <b>Hemat Energi:</b> Konsumsi daya yang efisien membuat teko ini
                tidak hanya praktis tetapi juga ekonomis.
                <br />
                <br />
                <b className="text-red-500">Dapatkan harga termurah</b>
              </p>
              <br />
              <br />
              <a
                href="https://wa.me/6289606883082?text=Permisi,%20aku%20tertarik%20untuk%20membeli%20Teko%20Lipat%20Elektrik%20dengan%20harga%20Rp.%20149.900,%20apakah%20stoknya%20masih%20ada?"
                class="mt-4 bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-600"
              >
                BELI
              </a>
            </div>
          </div>
          <div class="mt-8">
            <h2 class="text-xl font-bold">Metode Pembayaran</h2>
            <div class="mt-2 p-4 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <GopayIcon className="mx-10" width={100} height={100} />
                <DanaIcon className="mx-10" width={100} height={100} />
                <BriIcon className="mx-10" width={100} height={100} />
                <FlipIcon className="mx-10" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
