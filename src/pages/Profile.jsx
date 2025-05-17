import React, { useState } from "react";

const features = [
  {
    key: "adaptiveQuizzes",
    title: "Adaptive Quizzes",
    description: "Questions adjust to your skill level in real-time.",
    button: "Start Quiz",
  },
  {
    key: "flashcards",
    title: "Flashcards",
    description: "Master topics with flip-style flashcards.",
    button: "View Flashcards",
  },
  {
    key: "dailyHabits",
    title: "Daily Habits",
    description: "Track and complete study goals daily.",
    button: "Set Habits",
  },
  {
    key: "progressTracking",
    title: "Progress Tracking",
    description: "See your growth in beautiful charts.",
    button: "View Progress",
  },
  {
    key: "smartNotes",
    title: "Smart Notes",
    description: "Write, edit, and organize notes with live preview.",
    button: "Open Notes",
  },
];

const Profile = () => {
  const [selected, setSelected] = useState("adaptiveQuizzes");

  const current = features.find(f => f.key === selected);

  return (
    <div className="w-full min-h-[90dvh] flex justify-center items-center flex-col py-12 px-4 bg-[#0f0f0f] text-white max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Tools</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {features.map(f => (
          <button
            key={f.key}
            onClick={() => setSelected(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                selected === f.key
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
          >
            {f.title}
          </button>
        ))}
      </div>

      <div className="bg-white/5 p-6 rounded-xl text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">{current.title}</h3>
        <p className="text-white/70 mb-6">{current.description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-semibold transition-all">
          {current.button}
        </button>
      </div>
    </div>
  );
};

export default Profile;
