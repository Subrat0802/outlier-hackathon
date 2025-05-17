import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="bg-[#0f0f0f] scroll-smooth text-white min-h-[100dvh]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

