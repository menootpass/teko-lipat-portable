import Image from "next/image";
import GopayIcon from "../components/svg/gopay.svg";
import DanaIcon from "../components/svg/dana.svg";
import BriIcon from "../components/svg/bri.svg";
import FlipIcon from "../components/svg/flip.svg";
import { namaProduk, Deskripsi, spesifikasi, harga, waUrl } from "../lib/datas";
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
              <h1 class="text-2xl font-bold">{namaProduk}</h1>
              <div class="mt-2">
                <span class="text-gray-500 line-through">Rp. {harga[0]}</span>
                <span class="text-red-500 text-2xl font-bold">Rp. {harga[1]}</span>
              </div>
              <p class="mt-4 text-gray-700">{Deskripsi}</p>
              <p
                class="mt-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: spesifikasi }}
              ></p>
              <b className="text-red-500">Dapatkan harga termurah</b>
              <br />
              <br />
              <a
                target="_blank"
                href={waUrl}
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
