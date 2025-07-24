import React from "react";
import { useNavigate } from "react-router-dom";
import { WholeWord, Workflow, Ear, BookOpenText, CircleUser } from 'lucide-react';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#fdf6ec]">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFD180] flex flex-col items-start py-6 px-4 min-h-screen">
        <button className="flex items-center gap-2 mb-8">
          <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" stroke="#32373b" strokeWidth="2"/><rect x="8" y="14" width="16" height="4" rx="2" fill="#32373b"/></svg>
          <span className="font-bold text-lg bg-white rounded-full px-4 py-2 shadow">Menu</span>
        </button>
        <nav className="flex flex-col gap-6 w-full">
          <a href="#" className="flex items-center gap-2 font-bold text-[#32373b] text-lg hover:text-[#c83e4d]">
            <span><BookOpenText/></span> Belajar
          </a>
          <a href="#" className="flex items-center gap-2 font-bold text-[#32373b] text-lg hover:text-[#c83e4d]">
            <span><CircleUser/></span> Profil
          </a>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center">
        {/* Wave & Profile */}
        <div className="w-full relative">
          <svg className="w-full" height="120" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,120 L0,120 Z" fill="#C83E4D"/>
          </svg>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center" style={{marginTop: 10}}>
            <div className="w-24 h-24 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-4xl mb-2" />
            <div className="text-lg font-bold text-[#32373b]">Nameless</div>
            <div className="text-sm text-gray-500">Lvl</div>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-20 px-4 w-full max-w-5xl justify-center">
          {/* Card 1 */}
          <div className="flex-1 bg-[#c83e4d] rounded-2xl p-5 shadow text-white max-w-xs mx-auto flex flex-col items-start relative">
            <div className="absolute -top-6 left-4 bg-[#FFD180] rounded-full p-2 text-2xl"><Workflow color="#32373b"/></div>
            <div className="font-bold text-lg mb-2 mt-4">Sambung Kata</div>
            <div className="text-sm">
              Melatih daya ingat dan pengetahuan budaya lewat permainan menyambungkan kata-kata yang berkaitan dengan daerah-daerah di Indonesia.
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-[#c83e4d] rounded-2xl p-5 shadow text-white max-w-xs mx-auto flex flex-col items-start relative">
            <div className="absolute -top-6 left-4 bg-[#FFD180] rounded-full p-2 text-2xl"><WholeWord color="#32373b"/></div>
            <div className="font-bold text-lg mb-2 mt-4">Bubble Kata</div>
            <div className="text-sm">
              Mengasah ketelitian dan pemahaman budaya lewat pilihan kata dalam bentuk gelembung yang harus dipilih atau disusun dengan benar.
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex-1 bg-[#c83e4d] rounded-2xl p-5 shadow text-white max-w-xs mx-auto flex flex-col items-start relative">
            <div className="absolute -top-6 left-4 bg-[#FFD180] rounded-full p-2 text-2xl"><Ear color="#32373b"/></div>
            <div className="font-bold text-lg mb-2 mt-4">Tebak Suara</div>
            <div className="text-sm">
              mengajak pengguna untuk mendengarkan rekaman suara dari penutur asli yang berbicara dalam bahasa daerah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
