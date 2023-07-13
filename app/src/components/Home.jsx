import React from "react";
import background from "../images/Background.png";

const Home = () => {
  return (
    <div
      id="home"
      data-aos="zoom-in"
      className="flex md:h-[500px] h-[400px] justify-center relative flex-col py-12 px-10 bg-stone-200"
    >
      <img
        className="w-[70%] md:w-[50%] absolute bottom-0 right-0"
        src={background}
        alt="background"
      />

      <div className="relative">
        <h2 className="font-semibold text-2xl uppercase text-black">
          #Senyumterus
        </h2>

        <h1 className="font-bold text-4xl mt-2 text-blue-500 uppercase">
          Ayo Bangun Senyum Indonesia
        </h1>

        <button className="px-4 py-2 mt-5 rounded-full bg-red-500 hover:bg-blue-500 transition-all active:scale-[1.05] text-white font-semibold text-center">
          Reservasi Disini
        </button>
      </div>
    </div>
  );
};

export default Home;
