import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white/60 py-10 mt-20 bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <h2 className="text-white font-bold text-xl mb-4">BRIO</h2>
          <p className="text-white/40">
            Smarter learning, adaptive quizzing, and progress you can see.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 text-white px-4 py-2 rounded-md outline-none placeholder-white/30"
            />
            <button className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold py-2 px-4 rounded-md hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-white/30">
        © {new Date().getFullYear()} BRIO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
