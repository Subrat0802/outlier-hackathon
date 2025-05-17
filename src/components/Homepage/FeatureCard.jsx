/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
// import { features } from "../../../data/features";
import { Brain, BookOpenCheck, Clock3, BarChart3, PencilRuler } from "lucide-react";

const features = [
  {
    id:1,
    icon: <Brain size={36} />,
    title: "Adaptive Quizzes",
    desc: "Questions adjust to your skill level in real-time.",
  },
  {
    id:2,
    icon: <BookOpenCheck size={36} />,
    title: "Flashcards",
    desc: "Master topics with flip-style flashcards.",
  },
  {
    id:3,
    icon: <Clock3 size={36} />,
    title: "Daily Habits",
    desc: "Track and complete study goals daily.",
  },
  {
    id:4,
    icon: <BarChart3 size={36} />,
    title: "Progress Tracking",
    desc: "See your growth in beautiful charts.",
  },
  {
    id:5,
    icon: <PencilRuler size={36} />,
    title: "Smart Notes",
    desc: "Write, edit, and organize notes with live preview.",
  },
];

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4 }}
    className="bg-[#1a1a1a] p-6 rounded-xl text-white text-center shadow-lg hover:scale-105 transition-transform"
  >
    <div className="mb-4 text-cyan-300">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-white/60">{desc}</p>
  </motion.div>
);


const WhatYouCanDoSection = () => {
  return (
    <div className="bg-[#0f0f0f] py-20 px-4 mb-10">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">"What You Can Do with Brio"</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((el) => (
          <FeatureCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default WhatYouCanDoSection;
