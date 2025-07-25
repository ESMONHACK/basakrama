import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: 'Si Ucok hamu sude marsogot do manang?',
    sub: 'Apa arti kata “marsogot”?',
    options: [
      "Besok",
      "Sekarang",
      "Nanti",
      "Lusa"
    ],
    answer: 0,
  },
  {
    question: 'Budi sedang belajar di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Pasar",
      "Sekolah",
      "Rumah",
      "Kebun"
    ],
    answer: 1,
  },
  {
    question: 'Ibu membeli sayur di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Sekolah",
      "Pasar",
      "Kantor",
      "Rumah"
    ],
    answer: 1,
  },
  {
    question: 'Andi sedang bermain bola di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Kebun",
      "Lapangan",
      "Dapur",
      "Kelas"
    ],
    answer: 1,
  },
  {
    question: 'Ayah pergi bekerja ke ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Kantor",
      "Pasar",
      "Sekolah",
      "Rumah"
    ],
    answer: 0,
  },
  {
    question: 'Sinta sedang membaca buku di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Kebun",
      "Perpustakaan",
      "Dapur",
      "Lapangan"
    ],
    answer: 1,
  },
  {
    question: 'Mereka makan malam di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Kamar",
      "Dapur",
      "Kebun",
      "Kelas"
    ],
    answer: 1,
  },
  {
    question: 'Paman menanam pohon di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Kebun",
      "Kelas",
      "Dapur",
      "Perpustakaan"
    ],
    answer: 0,
  },
  {
    question: 'Anak-anak belajar bersama di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Lapangan",
      "Kebun",
      "Kelas",
      "Dapur"
    ],
    answer: 2,
  },
  {
    question: 'Ibu memasak nasi di ______.',
    sub: 'Pilih kata yang tepat untuk melengkapi kalimat.',
    options: [
      "Dapur",
      "Kelas",
      "Kebun",
      "Lapangan"
    ],
    answer: 0,
  },
];

export const GameSoal = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [jumlahSoal, setJumlahSoal] = useState<number>(0);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showWrongNotif, setShowWrongNotif] = useState(false);

  // Handler
  const handleCheck = () => {
    if (selected === questions[current].answer) {
      setIsCorrect(true);
      setShowNotif(true);
      setTimeout(() => setShowNotif(false), 2000);
    } else {
      setShowWrongNotif(true);
      setTimeout(() => setShowWrongNotif(false), 2000);
    }
  };

  const handleNext = () => {
    if (current + 1 < jumlahSoal) {
      setCurrent(current + 1);
      setSelected(null);
      setIsCorrect(false);
    } else {
      // Selesai, tampilkan hasil atau redirect
      alert("Selesai!");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#fdf6ec]">
      {/* Tombol Back */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-4 left-4 bg-white rounded-full shadow p-2 flex items-center gap-2 hover:bg-gray-100 transition-colors z-30"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c83e4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline text-[#c83e4d] font-bold font-fredoka">Kembali</span>
      </button>

      {/* Step 1: Pilih jumlah soal */}
      {step === 1 && (
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#32373b] text-center mb-10 mt-4 font-fredoka">
            Kamu mau berapa soal?
          </h1>
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <button
              className="border-4 border-[#FFC14D] rounded-2xl py-4 px-8 font-extrabold text-[#32373b] text-center text-lg transition-all duration-200 hover:bg-[#fff7e6]"
              onClick={() => { setJumlahSoal(5); setStep(2); setCurrent(0); }}
            >
              5 soal
            </button>
            <button
              className="border-4 border-[#FFC14D] rounded-2xl py-4 px-8 font-extrabold text-[#32373b] text-center text-lg transition-all duration-200 hover:bg-[#fff7e6]"
              onClick={() => { setJumlahSoal(10); setStep(2); setCurrent(0); }}
            >
              10 soal
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Soal pilihan ganda */}
      {step === 2 && (
        <div className="flex flex-col items-center w-full">
          <div className="mb-2 mt-4 z-10">
            <div className="text-xl md:text-2xl font-bold text-[#32373b] text-center font-fredoka mb-2">
              Ayo selesaikan latihan soal ini...
            </div>
            <div className="text-lg md:text-xl font-fredoka text-[#32373b] text-center mb-2">
              <span className="font-bold">Soal {current + 1}</span>
            </div>
            <div className="text-lg md:text-xl font-fredoka text-[#32373b] text-center mb-2">
              “{questions[current].question}”
            </div>
            <div className="text-base md:text-lg font-fredoka text-[#32373b] text-center mb-8">
              {questions[current].sub}
            </div>
          </div>
          {/* Pilihan */}
          <div className="flex flex-col gap-4 mb-10 w-full max-w-md">
            {questions[current].options.map((opt, idx) => (
              <button
                key={opt}
                className={`flex items-center gap-3 rounded-lg py-3 font-bold font-fredoka text-lg shadow transition-all px-6
                  ${selected === idx
                    ? "bg-[#b73642] cursor-pointer ring-4 ring-[#f4b860] text-white scale-105"
                    : "bg-[#c83e4d] text-white hover:bg-[#b73642]"}
                `}
                onClick={() => setSelected(idx)}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b73642] text-white font-bold">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt}
              </button>
            ))}
          </div>
          {/* Button Periksa/Selanjutnya */}
          <button
            className={`w-40 py-3 font-fredoka rounded-lg font-bold shadow transition-colors text-lg ${
              isCorrect
                ? "bg-[#f4b860] text-[#c83e4d] hover:bg-[#ffe0b2]"
                : "bg-[#f4b860] text-[#32373b] hover:bg-[#ffe0b2]"
            }`}
            onClick={isCorrect ? handleNext : handleCheck}
            disabled={selected === null}
          >
            {isCorrect ? "Selanjutnya" : "Periksa"}
          </button>
          {/* Notifikasi */}
          {showNotif && isCorrect && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold z-50">
              Jawaban kamu benar!
            </div>
          )}
          {showWrongNotif && !isCorrect && (
            <div className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold z-50">
              Jawaban kamu salah!
            </div>
          )}
        </div>
      )}
    </div>
  );
};
