// src/screens/Desktop/Login/Loginform.tsx

export const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6ec] relative overflow-hidden px-4">

      {/* Login Card */}
      <div className="relative z-20 bg-[#FFD180] rounded-2xl md:rounded-3xl shadow-lg px-4 py-6 sm:px-8 sm:py-8 w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Basa Krama Logo"
          className="w-24 sm:w-32 mx-auto mb-2"
        />
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 text-white drop-shadow">
          Masuk
        </h2>
        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#6d4c41]">Username</label>
            <input
              type="text"
              className="w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c83e4d] bg-white text-sm sm:text-base"
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#6d4c41]">Kata sandi</label>
            <input
              type="password"
              className="w-full rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c83e4d] bg-white text-sm sm:text-base"
              placeholder="Masukkan kata sandi"
            />
          </div>
          {/* Tombol Masuk */}
          <button
            type="submit"
            className="w-full bg-[#c83e4d] text-white font-bold py-2 rounded-lg shadow hover:bg-[#b73642] transition-colors text-base sm:text-lg"
          >
            Masuk
          </button>
          {/* Tombol Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-[#32373b] font-bold py-2 rounded-lg shadow hover:bg-gray-100 transition-colors text-base sm:text-lg"
          >
            <img src="/images/google.png" alt="Google" className="h-6 w-6" />
            Google
          </button>
        </form>
        {/* Register Link */}
        <div className="w-full text-center mt-4">
          <span className="text-xs text-[#6d4c41]">Don't have account?</span>
          <button className="block w-full mt-2 bg-white text-[#c83e4d] font-bold py-2 rounded-full shadow hover:bg-[#ffe0e0] transition-colors text-sm sm:text-base">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};
