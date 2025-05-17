import React from "react";
import Button from "../../ui/Button";
import { Rocket } from "lucide";
import Logo from "../../assets/svgs/Logo";

const HeroSection = () => {
  return (
    <div className="min-h-[100dvh] flex justify-center items-center">
        <div className="bg-[#163333] p-20 absolute top-[400px] right-14 blur-3xl "></div>
        <div className="bg-[#0c3030] p-20 absolute top-[200px] left-14 blur-3xl "></div>
        <div className="bg-[#0c3030]  p-20 absolute top-[1200px] left-14 blur-3xl "></div>
        <div className="bg-[#0c3030]  p-20 absolute top-[1700px] left-14 blur-3xl "></div>
        <div className="bg-[#0c3030]  p-20 absolute top-[2300px] right-14 blur-3xl "></div>
      <div className=" text-center">
        <p className="text-6xl mb-1 md:text-6xl py-3 font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
          Smarter Learning Starts Here.
        </p>
        <p className="text-lg text-white/50 leading-tight mb-4">
          Brio is your all-in-one platform for modern learners — from adaptive
          quizzes and flashcards to habit tracking, markdown notes, and progress
          stats.
        </p>
        <Button text="Get Started"  />
      </div>
    </div>
  );
};

export default HeroSection;
