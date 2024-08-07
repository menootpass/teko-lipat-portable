"use client";
import Image from "next/image";
import GopayIcon from "../components/svg/gopay.svg";
import DanaIcon from "../components/svg/dana.svg";
import BriIcon from "../components/svg/bri.svg";
import FlipIcon from "../components/svg/flip.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  gambar,
  namaProduk,
  Deskripsi,
  spesifikasi,
  harga,
  waUrl,
  varian,
} from "../lib/datas";
import { useState, useEffect } from "react";

export default function Home() {
  const hargaAsli = parseInt(harga[0].replace(".", ""));
  const hargaDiskon = parseInt(harga[1].replace(".", ""));

  const [jumlah, setJumlah] = useState(1);
  const [selectedColor, setSelectedColor] = useState(varian[0]);
  const newWaUrl =
    waUrl +
    ` Aku ingin membeli ${namaProduk} sebanyak ${jumlah} varian ${selectedColor}`;

  const totalHarga = jumlah * hargaDiskon;

  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(false);
  }, []);

  const handleDecrement = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const handleIncrement = () => {
    setJumlah(jumlah + 1);
  };
  const handleChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <center className="size-24">
            <Image
              src={"/img/logo.png"}
              alt="Logo"
              className="rounded-lg w-full"
              width={24000}
              height={24000}
            ></Image>
          </center>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Slider {...settings}>
                {gambar.map((img, index) => (
                  <div key={index}>
                    <Image
                      src={`/img/${img}`}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto"
                      width={554}
                      height={554}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">{namaProduk}</h1>
              <div className="mt-2">
                <span className="text-gray-500 line-through">
                  Rp. {harga[0]}
                </span>
                <span className="text-red-500 text-2xl font-bold">
                  Rp. {harga[1]}
                </span>
              </div>
              <p className="mt-4 text-gray-700">{Deskripsi}</p>
              <p
                className="mt-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: spesifikasi }}
              ></p>
              <b className="text-red-500">Dapatkan harga termurah</b>
              <br />
              <br />
              <br />
              <p>Tentukan jumlah & varian yang mau dibeli</p>
              <br />
              <div className="flex items-center justify-center mb-1 w-full">
                <button
                  onClick={handleDecrement}
                  className="bg-white text-black border border-black mx-12 w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white"
                >
                  <span className="text-xl">-</span>
                </button>
                <span className="mx-4 text-2xl">{jumlah}</span>
                <button
                  onClick={handleIncrement}
                  className="bg-white text-black border border-black mx-12 w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white"
                >
                  <span className="text-xl">+</span>
                </button>
              </div>
              <div className="mb-1">
                <select
                  value={selectedColor}
                  onChange={handleChangeColor}
                  className="w-full px-4 py-2 border border-black hover:bg-black hover:text-white"
                  name="varian"
                >
                  {varian.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                Total Harga:{" "}
                <strong>
                  {isClient
                    ? "Akan Dihitung Manual Oleh Penjual"
                    : `Rp. ${totalHarga.toLocaleString()}`}
                </strong>
              </div>
              <a
                href={newWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-4 py-2 bg-blue-700 text-white text-center focus:bg-blue-400"
              >
                Beli
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Metode Pembayaran</h2>
            <div className="mt-2 p-4 flex justify-center">
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
