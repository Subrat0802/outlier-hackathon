import React, { useState } from "react";
import { testimonials } from "../../../data/testimonialData";
import { CircleArrowLeft } from "lucide-react";
import { CircleArrowRight } from "lucide-react";
import { Quote } from "lucide-react";
import ScrollFloat from "../../ui/ScrollFloat";

const TestimonialSection = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); 

  const handleLeft = () => {
    setIsAnimating(true); 
    setTimeout(() => {
      setCount((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsAnimating(false); 
    }, 300);
  };

  const handleRight = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCount((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-[75dvh] cursor-default z-10 relative text-center select-none">
      <div className="text-center font-extrabold ">
        <ScrollFloat
          animationDuration={0.5}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          reviews
        </ScrollFloat>
      </div>
      <div className="w-full px-8 rounded-lg bg-blue-400 py-16">
        <div className="text-2xl text-black flex justify-between items-center">
          <div className={`flex gap-1 justify-start mt-6  transition-all duration-300 ease-in-out transform ${
            isAnimating ? "opacity-0 -translate-z-4" : "opacity-100 translate-x-0"
          }`}>
            <p className="">{testimonials[count].name},</p>
            <p>{testimonials[count].place}</p>
          </div>
          <div className="flex gap-2">
            <p onClick={handleLeft} className="cursor-pointer hover:scale-105 transition-all duration-200">
              <CircleArrowLeft />
            </p>
            <p onClick={handleRight} className="cursor-pointer hover:scale-105 transition-all duration-200">
              <CircleArrowRight />
            </p>
          </div>
        </div>
        <div
          className={`flex justify-start mt-14 flex-col transition-all duration-300 ease-in-out transform ${
            isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
          }`}
        >
          <p className="text-4xl text-start text-black font-semibold">
            "{testimonials[count].review}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
