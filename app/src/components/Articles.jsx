import React from "react";
import timDokter from "../images/tim-dokter.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const articles = [
  {
    content: "APA YANG HARUS DIKETAHUI SEBELUM MEMULAI PERAWATAN BEHEL",
    date: "June 21, 2023",
  },
  {
    content:
      "7 TIPS MENJAGA KESEHATAN GIGI SETELAH MENCOPOT BEHEL: TIPS DAN PERAWATAN LANJUTAN",
    date: "June 21, 2023",
  },
  {
    content: "HARGA BEHEL DI DUNIA: BERAPA BIAYA YANG HARUS DIKELUARKAN?",
    date: "May 22, 2023",
  },
  {
    content: "3 KEUNGGULAN BEHEL METAL AMERICAN ORTHODONTIC (AO)",
    date: "May 22, 2023",
  },
  {
    content: "3 KEUNGGULAN MENGGUNAKAN BEHEL METAL KONVENSIONAL",
    date: "May 22, 2023",
  },
  {
    content: "5 HAL TENTANG BEHEL GIGI METAL YANG PERLU KAMU KETAHUI",
    date: "November 25, 2022",
  },
  {
    content: "PUTIH NATURAL DENGAN BLEACHING GIGI",
    date: "November 22, 2022",
  },
  {
    content: "DENTAL CROWN (JAKET GIGI)",
    date: "September 4, 2020",
  },
  {
    content: "GINGIVEKTOMI & GINGIVOPLASTY",
    date: "September 4, 2020",
  },
  {
    content: "RETAINER",
    date: "September 4, 2020",
  },
  {
    content: "BLEACHING GIGI",
    date: "September 4, 2020",
  },
  {
    content: "BEHEL SAPPHIRE",
    date: "September 4, 2020",
  },
];

const Articles = () => {
  return (
    <div id="article" className="bg-neutral-300">
      <div className="relative">
        <h1 className="font-bold absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center z-10  text-3xl md:text-7xl text-white">
          Tim Dokter Kami
        </h1>
        <img
          className="w-full object-contain brightness-50"
          src={timDokter}
          alt="tim dokter"
        />
        s
      </div>

      <div className="px-7 py-10 max-w-[1500px] m-auto">
        <h2 className="text-4xl text-center text-blue-500 font-bold">
          Artikel Kesehatan Gigi dan Mulut
        </h2>

        <div>
          <div className="flex gap-10 flex-wrap justify-center">
            {articles.map((article, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
                data-aos-delay="1000"
                key={index}
                className="py-5 mt-10 bg-white relative shadow-lg rounded-lg w-[300px] min-h-[300px] pb-20"
              >
                <h3 className="font-bold text-2xl px-7 text-gray-600 uppercase">
                  {article.content}
                </h3>

                <a
                  href="#"
                  className="mt-10 px-7 flex items-center group w-max gap-1 justify-center text-green-600 text-basae font-medium"
                >
                  Read More
                  <AiOutlineArrowRight className="group-hover:translate-x-2 transition-all" />
                </a>

                <div className="w-full py-3 absolute bottom-0 border-t-2 border-gray-500">
                  <p className="px-7 text-gray-400">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
