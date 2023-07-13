import React from "react";
import { BsFillPersonFill, BsPhone } from "react-icons/bs";
import { BiSolidStore } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imageRoom1 from "../images/room1.png";
import imageRoom2 from "../images/room2.png";
import imageRoom3 from "../images/room3.png";
import imageRoom4 from "../images/room4.png";
import imageRoom5 from "../images/room5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../App.css";

const hows = [
  {
    icon: BsFillPersonFill,
    h3: "Chat Admin",
    p: "Chat langsung dengan admin untuk bertanya seputar kesehatan gigi dan mulutmu",
  },
  {
    icon: BiSolidStore,
    h3: "Kunjungan Klinik",
    p: "Setelah mendapatkan jadwal, kamu bisa langsung datang ke cabang Edental yang sudah kamu pilih ketika reservasi.",
  },
  {
    icon: BsPhone,
    h3: "Buat Reservasi",
    p: "Kamu bisa lakukan reservasi melalui website, atau langsung melalui admin",
  },
];

const images = [
  {
    image: imageRoom1,
    color: "bg-red-500",
  },
  {
    image: imageRoom2,
    color: "bg-blue-500",
  },
  {
    image: imageRoom3,
    color: "bg-green-500",
  },
  {
    image: imageRoom4,
    color: "bg-orange-500",
  },
  {
    image: imageRoom5,
    color: "bg-yellow-500",
  },
];

const contacts = [
  {
    icon: BsPhone,
    h3: "Reservasi",
    p: "Reservasi Melalui Web",
  },
  {
    icon: IoLogoWhatsapp,
    h3: "Chat Whatsapp",
    p: "Reservasi Melalui Whatsapp",
  },
  {
    icon: IoMdCall,
    h3: "Call Admin",
    p: "0812-8836-4747",
  },
];

const Reservation = () => {
  return (
    <div id="contact" className="px-5 py-20 bg-neutral-300">
      <div className="max-w-[900px] flex flex-col md:flex-row justify-between items-center gap-20 m-auto">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <p className="font-medium text-xl text-blue-500">PROSES RESERVASI</p>
          <h2 className="font-bold text-2xl text-blue-500">
            CARA MELAKUKAN RESERVASI DI EDENTAL ?
          </h2>

          <div className="mt-10">
            {hows.map((how, index) => (
              <div key={index} className="mt-10">
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-blue-500">
                  <how.icon className="scale-[4] text-white" />
                </div>

                <h3 className="font-bold uppercase mt-5 text-xl text-blue-500">
                  {how.h3}
                </h3>
                <p className="mt-3 text-base font-semibold text-gray-700">
                  {how.p}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
          className="md:w-[1000px] w-[90%] bg-slate-200"
        >
          <div className="px-5 py-3">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper w-[200px] h-[300px] object-cover"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className={`${image.color}`}>
                  <img
                    className={`${image.color} object-cover h-full`}
                    src={image.image}
                    alt="image room"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="px-7 py-10 flex flex-col md:flex-row gap-10 justify-between  items-center">
            <div>
              <h3 className="font-bold text-2xl text-blue-500 uppercase">
                Jam Operasional
              </h3>

              <div className="mt-7 flex items-center gap-3">
                <AiFillClockCircle className="text-[35px]" />

                <div>
                  <p className="text-base text-black uppercase">Senin-Minggu</p>
                  <p className="text-base text-black uppercase">
                    10.00 - 20.00
                  </p>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <IoLogoWhatsapp className="text-[35px]" />

                <div>
                  <p className="text-base text-black uppercase">
                    Chat Whatsapp
                  </p>
                  <p className="text-base text-black uppercase">
                    0812-8836-4747
                  </p>
                </div>
              </div>
            </div>

            <div>
              {contacts.map((contact, index) => (
                <div key={index}>
                  <div className="w-[60px] h-[60px] mt-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <contact.icon className="text-[20px] text-white" />
                  </div>

                  <h3 className="mt-3 uppercase font-bold text-lg">
                    {contact.h3}
                  </h3>
                  <p>{contact.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
