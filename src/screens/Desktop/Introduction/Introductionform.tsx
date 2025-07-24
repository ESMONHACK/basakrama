import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES = [
  {
    key: "medan",
    title: "Bahasa Medan",
    desc: "Bahasa Medan adalah ragam bahasa Melayu yang digunakan secara khas oleh masyarakat di kota Medan dan sekitarnya, Provinsi Sumatera Utara.",
  },
  {
    key: "jawa",
    title: "Bahasa Jawa",
    desc: "Bahasa Jawa adalah bahasa daerah dengan jumlah penutur terbanyak di Indonesia, digunakan oleh masyarakat di Jawa Tengah, Yogyakarta, dan Jawa Timur.",
  },
  {
    key: "sunda",
    title: "Bahasa Sunda",
    desc: "Bahasa Sunda adalah bahasa utama masyarakat Jawa Barat, Banten Selatan, dan sebagian Jakarta.",
  },
];

const PURPOSES = [
  "Sekadar menambahkan kemampuan berbahasa",
  "Berkomunikasi dengan keluarga",
  "Memahami budaya lokal",
];

const PROFICIENCY = [
  "Tidak Bisa",
  "Bisa",
  "Bisa Banget",
];

export const IntroductionForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [selectedProficiency, setSelectedProficiency] = useState<string | null>(null);

  // Animasi varian
  const fadeVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  };

  // Tombol back handler
  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else if (step === 2) {
      setStep(1);
      setSelectedPurpose(null);
    } else if (step === 3) {
      setStep(2);
      setSelectedProficiency(null);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#fdf6ec] relative overflow-hidden px-4"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {/* Tombol Back */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-white rounded-full shadow p-2 flex items-center gap-2 hover:bg-gray-100 transition-colors z-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c83e4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline text-[#c83e4d] font-bold font-fredoka">Kembali</span>
      </button>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            {...fadeVariant}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#32373b] text-center mb-10 mt-4 font-fredoka">
              Kamu pengen bahasa daerah yang mana?
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-5xl justify-center">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.key}
                  onClick={() => {
                    setSelectedLanguage(lang.key);
                    setTimeout(() => setStep(2), 300); // biar ada efek klik
                  }}
                  className={`flex-1 border-4 rounded-2xl p-5 bg-white shadow text-center max-w-xs mx-auto transition-all duration-200
                    ${selectedLanguage === lang.key
                      ? "border-[#c83e4d] scale-105"
                      : "border-[#FFC14D] hover:border-[#c83e4d] hover:scale-105"}
                  `}
                  style={{ outline: selectedLanguage === lang.key ? "2px solid #c83e4d" : "none" }}
                >
                  <h2 className="font-extrabold text-xl mb-2 border-b-4 pb-1 font-fredoka"
                    style={{ borderColor: selectedLanguage === lang.key ? "#c83e4d" : "#FFC14D" }}>
                    {lang.title}
                  </h2>
                  <p className="text-[#32373b] text-base">{lang.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            {...fadeVariant}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#32373b] text-center mb-10 mt-4 font-fredoka">
              Tujuan kamu mempelajari bahasa yang kamu pilih itu apa?
            </h1>
            <div className="flex flex-col gap-6 w-full max-w-lg">
              {PURPOSES.map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => {
                    setSelectedPurpose(purpose);
                    setTimeout(() => setStep(3), 300);
                  }}
                  className={`border-4 rounded-2xl py-3 px-4 font-extrabold text-[#32373b] text-center text-base sm:text-lg transition-all duration-200
                    ${selectedPurpose === purpose
                      ? "border-[#c83e4d] bg-[#ffeaea] scale-105"
                      : "border-[#FFC14D] bg-white hover:border-[#c83e4d] hover:scale-105"}
                  `}
                  style={{ fontFamily: "Fredoka, sans-serif" }}
                >
                  {purpose}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            {...fadeVariant}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#32373b] text-center mb-10 mt-4 font-fredoka">
              Sejauh mana bahasa yang kamu pilih itu sudah kuasai?
            </h1>
            <div className="flex flex-col gap-6 w-full max-w-lg">
              {PROFICIENCY.map((prof) => (
                <button
                  key={prof}
                  onClick={() => setSelectedProficiency(prof)}
                  className={`border-4 rounded-2xl py-3 px-4 font-extrabold text-[#32373b] text-center text-base sm:text-lg transition-all duration-200
                    ${selectedProficiency === prof
                      ? "border-[#c83e4d] bg-[#ffeaea] scale-105"
                      : "border-[#FFC14D] bg-white hover:border-[#c83e4d] hover:scale-105"}
                  `}
                  style={{ fontFamily: "Fredoka, sans-serif" }}
                >
                  {prof}
                </button>
              ))}
            </div>
            {/* Tombol Next jika sudah pilih */}
            {selectedProficiency && (
              <button
                className="mt-8 px-8 py-2 bg-[#c83e4d] text-white font-bold rounded-full shadow hover:bg-[#b73642] transition-colors"  onClick={() => navigate("/dashboard")}
              >
                Selesai
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
