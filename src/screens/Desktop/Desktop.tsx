import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const translations = {
  id: {
    heroTitle1: "Cara yang menyenangkan dan efektif",
    heroTitle2: "untuk belajar ",
    heroTitle3: "bahasa",
    heroTitle4: "dan",
    heroTitle5: "budaya",
    mulai: "Mulai",
    sudahPunyaAkun: "Sudah punya akun",
    funEff: "menyenangkan dan efektif",
    funEffDesc: "Belajar bersama Basa Krama itu menyenangkan dan efektif! Aplikasi ini adalah platform edukatif interaktif berbasis budaya yang dirancang untuk melatih logika berbahasa anak-anak dan remaja.",
    alwaysMotivated: "selalu termotivasi",
    alwaysMotivatedDesc: "Kami mempermudah pembentukan kebiasaan belajar bahasa budaya dengan fitur-fitur mirip game dan tantangan seru. Seperti sambung kata, bubble kata, dan tebak suara",
    ctaTitle1: "Belajar bahasa daerah dengan ",
    ctaTitle2: "basa krama",
  },
  en: {
    heroTitle1: "A fun and effective way",
    heroTitle2: "to learn ",
    heroTitle3: "language",
    heroTitle4: "and",
    heroTitle5: "culture",
    mulai: "Start",
    sudahPunyaAkun: "Already have an account",
    funEff: "fun and effective",
    funEffDesc: "Learning with Basa Krama is fun and effective! This app is an interactive educational platform based on culture, designed to train language logic for children and teenagers.",
    alwaysMotivated: "always motivated",
    alwaysMotivatedDesc: "We make it easy to build language and culture learning habits with game-like features and exciting challenges. Such as word chain, word bubble, and guess the sound.",
    ctaTitle1: "Learn local languages with ",
    ctaTitle2: "basa krama",
  }
};

export const Desktop: React.FC = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<"id" | "en">("id");
  
  return (
    <main className="bg-[#fdf6ec] flex flex-col items-center w-full min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <span className={lang === "id" ? "font-bold text-[#c83e4d]" : "text-gray-400"}>ID</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={lang === "en"}
            onChange={() => setLang(lang === "id" ? "en" : "id")}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#c83e4d] transition-all"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-all"></div>
        </label>
        <span className={lang === "en" ? "font-bold text-[#c83e4d]" : "text-gray-400"}>EN</span>
      </div>
      <div className="bg-[#fdf6ec] w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16">
          {/* Logo */}
          <img
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[184px] lg:h-[184px] absolute -top-4 left-4 lg:-top-4 lg:left-0 object-cover z-10"
            alt="Hackaton"
            src="/images/logo.png"
          />

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
              alt="Mail sent pana"
              src="/images/orang1.png"
            />
          </div>

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 font-fredoka">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-bold mb-8 lg:mb-12 leading-tight text-center lg:text-left">
              <span className="text-[#32373b] block">
                {translations[lang].heroTitle1}
              </span>
              <span className="text-[#32373b] block">
                {translations[lang].heroTitle2}
                <span className="text-[#c83e4d]">{translations[lang].heroTitle3}</span> {translations[lang].heroTitle4} <span className="text-[#c83e4d]">{translations[lang].heroTitle5}</span>
              </span>
            </h1>

            <div className="flex flex-col gap-4 w-full max-w-md">
              <Button className="w-full h-14 lg:h-16 xl:h-[72px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] font-bold text-white text-xl lg:text-2xl xl:text-4xl hover:bg-[#b73642] transition-colors"
              onClick={() => navigate("/introduction")}> 
                {translations[lang].mulai}
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 lg:h-16 xl:h-[72px] rounded-[25px] border-4 lg:border-[5px] border-solid border-[#f4d6cc] shadow-[5px_5px_4px_#00000040] font-bold text-[#f4b860] text-xl lg:text-2xl xl:text-4xl hover:bg-[#f4b860] transition-colors"
                onClick={() => navigate("/login")}
              >
                {translations[lang].sudahPunyaAkun}
              </Button>
            </div>
          </div>
        </section>

        {/* Fun and Effective Section */}
        <section className="py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Kiri: Judul & Deskripsi */}
            <div className="w-full lg:w-1/2 px-4 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#c83e4d] mb-2 font-fredoka">
                {translations[lang].funEff}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-[#32373b]">
                {translations[lang].funEffDesc}
              </p>
            </div>
            {/* Kanan: Gambar */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                alt="Snowman pana"
                src="/images/orang2.png"
              />
            </div>
          </div>
        </section>

        {/* Always Motivated Section */}
        <section className="py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <img
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                alt="Follow the leader"
                src="/images/orang3.png"
              />
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:px-8 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#c83e4d] mb-2 font-fredoka">
                {translations[lang].alwaysMotivated}
              </h2>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-[#32373b]">
                {translations[lang].alwaysMotivatedDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:mb-16 px-4 leading-tight font-fredoka">
            <span className="text-[#32373b]">
              {translations[lang].ctaTitle1}
            </span>
            <span className="text-[#c83e4d]">{translations[lang].ctaTitle2}</span>
          </h2>

          <div className="flex justify-center mb-8 lg:mb-12">
            <Button className="w-full max-w-md h-14 lg:h-16 xl:h-[72px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] font-bold text-white text-xl lg:text-2xl xl:text-4xl hover:bg-[#b73642] transition-colors font-fredoka" onClick={() => navigate("/introduction")}> 
              {translations[lang].mulai}
            </Button>
          </div>

          <div className="relative w-full overflow-hidden" style={{height: '160px'}}>
            {/* SVG Wave */}
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1440 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 Q360,120 720,60 Q1080,0 1440,80 L1440,160 L0,160 Z"
                fill="#C83E4D"
              />
            </svg>
            {/* Gambar paus, posisikan di tengah */}
            <img
              src="/images/lumbafooter.png"
              alt="Paus"
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{height: '120px', objectFit: 'contain'}}
            />
          </div>
          {/* Merah solid di bawah wave */}
          <div className="bg-[#C83E4D] w-full" style={{height: '120px'}}></div>
        </section>
      </div>
    </main>
  );
};