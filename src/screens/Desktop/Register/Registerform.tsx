// src/screens/Desktop/Login/Loginform.tsx

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#fdf6ec] relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Tombol Back */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 left-4 bg-white rounded-full shadow p-2 flex items-center gap-2 hover:bg-gray-100 transition-colors z-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c83e4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline text-[#c83e4d] font-bold">Kembali</span>
      </button>

      {/* Login Card */}
      <div className="relative z-20 bg-[#FFD180] rounded-2xl md:rounded-3xl shadow-lg px-4 py-6 sm:px-8 sm:py-8 w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <img
          src="/images/logokecil.png"
          alt="Basa Krama Logo"
          className="w-24 sm:w-32 mx-auto mb-2"
        />
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 text-white drop-shadow font-fredoka">
          Register
        </h2>
        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#6d4c41] font-fredoka">Username</label>
            <input
              type="text"
              className="w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c83e4d] bg-white text-sm sm:text-base font-fredoka"
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#6d4c41] font-fredoka">Email</label>
            <input
              type="text"
              className="w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c83e4d] bg-white text-sm sm:text-base font-fredoka"
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#6d4c41] font-fredoka">Kata sandi</label>
            <input
              type="password"
              className="w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c83e4d] bg-white text-sm sm:text-base font-fredoka"
              placeholder="Masukkan kata sandi"
            />
          </div>
          {/* Tombol Masuk */}
          <button
            type="submit"
            className="w-full bg-[#c83e4d] text-white font-bold py-2 rounded-lg shadow hover:bg-[#b73642] transition-colors text-base sm:text-lg font-fredoka"
          >
            Daftar akun
          </button>
        </form>
        {/* Register Link */}
        {/* <div className="w-full text-center mt-4">
          <span className="text-xs text-[#6d4c41]">Tidak punya akun?</span>
          <button className="block w-full mt-2 bg-white text-[#c83e4d] font-bold py-2 rounded-full shadow hover:bg-[#ffe0e0] transition-colors text-sm sm:text-base">
            Daftar
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};
