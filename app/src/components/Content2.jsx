import React from "react";
import { FaTooth } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";

const benefits = [
  {
    icon: FaTooth,
    h3: "Dokter Gigi Profesional",
    p: "60++ dokter berpengalaman",
    delay: "1000",
  },
  {
    icon: AiOutlineCheckCircle,
    h3: "Sistem Reservasi",
    p: "Online reservasi",
    delay: "1300",
  },
  {
    icon: CgSandClock,
    h3: "Bebas Antrian",
    p: "Reservasi terintegrasi",
    delay: "1600",
  },
];

const Content2 = () => {
  return (
    <div className="px-5 flex flex-col md:flex-row items-center gap-10 mt-10 w-full justify-center py-10 bg-gray-300">
      {benefits.map((benefit, index) => (
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
          data-aos-once="true"
          data-aos-delay={`${benefit.delay}`}
          key={index}
          className="flex items-center gap-7"
        >
          <benefit.icon className="scale-[2] text-blue-500" />

          <div>
            <h3 className="font-semibold text-2xl text-blue-500">
              {benefit.h3}
            </h3>
            <p className="text-base font-medium text-gray-700">{benefit.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content2;
