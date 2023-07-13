import React from "react";
import checklistIcon from "../images/checklist.png";
import YoutubeEmbed from "./YoutubeEmbed";
import imageDental1 from "../images/image-dental-1.png";
import imageDental2 from "../images/image-dental-2.png";
import imageDental3 from "../images/image-dental-3.png";
import imageDental4 from "../images/image-dental-4.png";
import imageDental5 from "../images/image-dental-5.png";
import map from "../images/map.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const benefits = [
  "happy customers",
  "Painless Dentistry",
  "Kemudahan Pembayaran",
  "Harga Transparan",
  "Cek Gigi Mandiri AI Pertama di Indonesia",
  "Bebas Antrian",
  "Tersebar di 20 Kota",
];

const places = [
  "Dokter Gigi Jakarta Pusat",
  "Dokter Gigi Jakarta Barat",
  "Dokter Gigi Jakarta Timur",
  "Dokter Gigi Jakarta Selatan",
  "Dokter Gigi Tangerang",
  "Dokter Gigi Tangerang Selatan",
  "Dokter Gigi Bekasi Timur",
  "Dokter GIgi Bekasi Utara",
  "Dokter Gigi Depok",
  "Dokter Gigi Cibubur",
  "Dokter Gigi Bogor",
  "Dokter Gigi Bandung",
  "Dokter Gigi Cimahi",
  "Dokter Gigi Semarang",
  "Dokter Gigi Malang",
  "Dokter Gigi Palembang",
];

const images = [
  imageDental1,
  imageDental2,
  imageDental3,
  imageDental4,
  imageDental5,
];

const Content = () => {
  return (
    <div className="px-5 py-5">
      <div className="md:flex items-center justify-center gap-10">
        <div>
          <h2 className="font-bold text-blue-500 text-3xl">
            Rawat Gigimu di Dokter Gigi Terpercaya kami
          </h2>

          <div className="mt-7 flex flex-col gap-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex group items-center gap-2">
                <img
                  className="w-[30px] group-hover:rotate-[35deg] group-hover:scale-[1.05] transition-all"
                  src={checklistIcon}
                  alt="checklist icon"
                />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <YoutubeEmbed embedId="77f7GUk-QD8" />
      </div>

      <div className="mt-20">
        <h2 className="font-bold text-2xl text-gray-500 text-center">
          In Partnership With
        </h2>
        <Swiper
          className="md:flex hidden mt-10 border-[3px] border-blue-500 rounded-lg items-center justify-center"
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="m-auto h-[150px]"
                src={image}
                alt="image dental"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="flex md:hidden mt-10 border-[3px] border-blue-500 rounded-lg items-center justify-center"
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="m-auto h-[150px]"
                src={image}
                alt="image dental"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
        id="location"
        className="mt-20 max-w-[900px] m-auto"
      >
        <h2 className="text-3xl">
          LEBIH DEKAT DENGAN <b>ANDA</b> KINI KAMI HADIR DI <b>20 KOTA</b> DI
          <b> INDONESIA</b>
        </h2>
        <img className="mt-10 m-auto" src={map} alt="map" />

        <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
          <div className="flex flex-col gap-2">
            {places.slice(0, 8).map((place, index) => (
              <div key={index} className="group flex gap-2">
                <img
                  className="w-[30px] group-hover:rotate-[35deg] group-hover:scale-[1.05] transition-all"
                  src={checklistIcon}
                  alt="checklist icon"
                />
                <p>{place}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {places.slice(8).map((place, index) => (
              <div key={index} className="group flex gap-2">
                <img
                  className="w-[30px] group-hover:rotate-[35deg] group-hover:scale-[1.05] transition-all"
                  src={checklistIcon}
                  alt="checklist icon"
                />
                <p>{place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
