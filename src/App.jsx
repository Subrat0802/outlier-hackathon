import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#0f0f0f] scroll-smooth text-white min-h-[100dvh]">
      <Header />
      <Home />
    </div>
  );
}

export default App;

