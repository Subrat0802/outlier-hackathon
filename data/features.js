import { Brain, BookOpenCheck, Clock3, BarChart3, PencilRuler } from "lucide-react";

export const features = [
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