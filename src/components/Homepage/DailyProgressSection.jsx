import React from "react";
import progress from "/img.png"

const DailyProgressSection = () => {
  return (
    <div className="w-full  text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-[#121212]  gap-10">
        <img width={350} src={progress}/>

        <div className="w-full md:w-[70%] text-left">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
            Check Your Daily Progress
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Stay on top of your learning journey with real-time visual stats. Brio tracks your quiz performance, flashcard mastery, and daily habits — so you can see your growth, every step of the way.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DailyProgressSection;
