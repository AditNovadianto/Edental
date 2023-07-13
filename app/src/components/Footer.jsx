import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import imageSponsor from "../images/sponsor.png";

const apps = [
  {
    image: BiLogoFacebook,
  },
  {
    image: BiLogoInstagram,
  },
  {
    image: BiLogoTwitter,
  },
  {
    image: BiLogoYoutube,
  },
];

const Footer = () => {
  return (
    <>
      <div className="w-full text-center pb-10 bg-neutral-300">
        <div className="max-w-[1000px] m-auto">
          <h2 className="font-bold text-2xl text-neutral-500">
            Partner Asuransi
          </h2>
          <img
            className="mt-10 px-5 saturate-0 m-auto w-full"
            src={imageSponsor}
            alt="sponsor image"
          />
        </div>
      </div>

      <div className="w-full p-3 bg-black">
        <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-10 max-w-[1200px] m-auto">
          <p className="select-none text-center text-gray-400">
            Edental | PT. Bangun Senyum Indonesia © 2022 All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {apps.map((app, index) => (
              <a href="#">
                <app.image key={index} className="text-white text-[30px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
