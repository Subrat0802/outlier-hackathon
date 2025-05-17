import React, { useState } from "react";
import Button from "../../ui/Button";
import { Rocket } from "lucide";
import Logo from "../../assets/svgs/Logo";
import { Link } from "react-router-dom";
import RotatingText from "../../ui/RotatingText";
import Waves from "../../ui/WaveBg";
import Aurora from "../../ui/AuroraBg";
import BlurText from "../../ui/BlurText";

const HeroSection = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const handleClick = () => {
    localStorage.setItem("token", "123");
    setToken("123");
  };
  return (
    <div className="min-h-[100dvh] flex justify-center items-center flex-col">
      <div className="bg-[#163333] p-20 absolute top-[400px] right-14 blur-3xl "></div>
      <div className="bg-[#0c3030] p-20 absolute top-[200px] left-14 blur-3xl "></div>
      <div className="bg-[#0c3030]  p-20 absolute top-[1200px] left-14 blur-3xl "></div>
      <div className="bg-[#0c3030]  p-20 absolute top-[1700px] left-14 blur-3xl "></div>
      <div className="bg-[#0c3030]  p-20 absolute top-[2300px] right-14 blur-3xl "></div>

      <div className="z-10 relative">
        <p className="text-6xl mb-1 md:text-6xl py-3 z-10 font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
          Smarter Learning Starts Here.
        </p>

        <div className="">
          <BlurText
            text="Brio is your all-in-one platform for modern learners — from adaptive quizzes and flashcards to habit tracking, markdown notes, and progress stats."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-xl text-white/70 mb-8"
          ></BlurText>
        </div>

        <p className="text-lg text-white/50 leading-tight mb-4"></p>
        <Link to={"/profile/1"}>
          <Button
            onClick={handleClick}
            text={token ? "Go to profile" : "Get Started"}
          />
        </Link>
      </div>

      <Waves
        lineColor="#121111"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      ></Waves>
    </div>
  );
};

export default HeroSection;
