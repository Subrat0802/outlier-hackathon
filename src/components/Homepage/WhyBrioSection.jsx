import React, { useState } from "react";
import { whyBrio } from "../../../data/whybrio";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import PixelCard from "../../ui/PixelCard";
import ScrollFloat from "../../ui/ScrollFloat";

const WhyBrioSection = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const handleClick = () => {
    localStorage.setItem("token", "123");
    setToken("123");
  };
  return (
    <div className="cursor-default pb-20">
      <div className=" text-center ">
        <div className="text-center font-extrabold ">
        <ScrollFloat
          animationDuration={0.5}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Why Brio?
        </ScrollFloat>
      </div>
        <p className="text-white/50 mt-2 leading-tight">
          A smarter way to learn, track, and grow — all in one place.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {whyBrio.map((el) => (
          <PixelCard
            variant="pink"
            key={el.id}
            className="relative group border h-fit rounded-lg border-white/10 transition-all duration-200 overflow-hidden"
          >
            <div className="absolute inset-0 p-5 z-10">
              <p className="text-2xl font-bold mb-4 text-white/60">
                {el.title}
              </p>
              <p className="text-md font-semibold text-white/40">
                {el.subtitle}
              </p>
            </div>
          </PixelCard>
        ))}

        <div className="flex justify-center items-center rounded-lg">
          <Link to={"/profile/1"}>
            <Button
              onClick={handleClick}
              text={token ? "Go to profile" : "Join Now"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyBrioSection;
