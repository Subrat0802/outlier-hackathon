import React from "react";
import { whyBrio } from "../../../data/whybrio";

const WhyBrioSection = () => {
  return (
    <div className="cursor-default min-h-[75dvh] ">
      <div className=" text-center ">
        <p className="text-4xl font-extrabold ">"Why Brio?"</p>
        <p className="text-white/50 mt-2 leading-tight">
          A smarter way to learn, track, and grow — all in one place.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {whyBrio.map((el) => (
          <div
            key={el.id}
            className="group border-white/10 transition-all duration-200  p-5 "
          >
            <p className="text-2xl font-bold mb-4 text-white/60 ">
              {el.title}
            </p>
            <p className="text-md font-semibold mb-4 text-white/40">
              {el.subtitle}
            </p>
          </div>
          
        ))}
        <p>scsd</p>
      </div>
    </div>
  );
};

export default WhyBrioSection;
