
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WholeWord, Workflow, BookText, BookOpenText, CircleUser } from 'lucide-react';

export const Profile = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("profil");

  const menuItems = [
    {
      key: "belajar",
      label: "BELAJAR",
      icon: <BookOpenText />,
    },
    {
      key: "profil",
      label: "PROFILE",
      icon: <CircleUser />,
    },
  ];

  // Handler untuk menu
  const handleMenuClick = (key: string) => {
    setActiveMenu(key);
    if (key === "profil") {
      navigate("/profile");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#fdf6ec]">
      {/* Sidebar Desktop */}
      <div className="w-64 bg-[#FFD180] flex flex-col items-center py-6 px-4 min-h-screen hidden md:flex">
        <img
          src="/images/logokecil.png"
          alt="Basa Krama Logo"
          className="w-24 sm:w-32 mx-auto mb-8"
        />
        <nav className="flex flex-col gap-6 w-full flex-1">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={`
                flex items-center font-bold font-fredoka gap-2 text-lg w-full px-12 py-2 rounded-lg transition-all
                ${activeMenu === item.key
                  ? "ring-2 ring-[#c83e4d] text-[#c83e4d] font-bold"
                  : "text-[#32373b] hover:bg-white/40 hover:text-[#c83e4d] hover:shadow"}
              `}
              style={{
                background: activeMenu === item.key ? "transparent" : undefined,
              }}
            >
              <span className="text-xl">
                {React.cloneElement(item.icon, {
                  color: activeMenu === item.key ? "#c83e4d" : "#32373b",
                  size: 22,
                })}
              </span>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => {
              // Tambahkan logika logout di sini, misal: hapus token, redirect ke login
              navigate("/login");
            }}
            className="mt-auto w-full flex items-center gap-2 px-12 py-2 rounded-lg font-bold font-fredoka text-lg text-[#c83e4d] hover:bg-white/40 hover:text-[#b73642] transition-all focus:outline-none"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#c83e4d">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
            </svg>
            Logout
          </button>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center pb-20 md:pb-0"> {/* pb-20 agar tidak ketutupan menu mobile */}
        profile
      </div>
      {/* Bottom Menu Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-[#FFD180] flex md:hidden justify-around items-center py-2 z-50 border-t border-[#c83e4d]">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleMenuClick(item.key)}
            className={`flex flex-col items-center justify-center px-2 py-1 rounded transition-all
              ${activeMenu === item.key
                ? "ring-2 ring-[#c83e4d] text-[#c83e4d] font-bold"
                : "text-[#32373b] hover:bg-white/40 hover:text-[#c83e4d]"}
            `}
            style={{ background: activeMenu === item.key ? "transparent" : undefined }}
          >
            {React.cloneElement(item.icon, {
              color: activeMenu === item.key ? "#c83e4d" : "#32373b",
              size: 26,
            })}
            {/* Label hanya di desktop */}
          </button>
        ))}
      </div>
    </div>
  );
};
