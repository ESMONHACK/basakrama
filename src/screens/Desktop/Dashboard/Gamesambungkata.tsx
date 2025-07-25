import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const leftWords = ["Tidur", "Makan"];
const rightWords = ["Mangan", "Turu"];

export const MatchingGame = () => {
  const navigate = useNavigate();
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [pairing, setPairing] = useState<{ [key: number]: number | null }>({});
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showWrongNotif, setShowWrongNotif] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [jumlahSoal, setJumlahSoal] = useState<number>(0);
  const [current, setCurrent] = useState(0);

  const questions = [
    { left: ["Tidur", "Makan"], right: ["Mangan", "Turu"], answer: { 0: 1, 1: 0 } },
    { left: ["Pergi", "Minum"], right: ["Tindak", "Ngombe"], answer: { 0: 0, 1: 1 } },
    // ...tambah soal lain
  ];

  // GUNAKAN ini:
  const leftWords = questions[current].left;
  const rightWords = questions[current].right;
  const answer = questions[current].answer;

  // Handle click pairing
  const handleLeftClick = (idx: number) => setSelectedLeft(idx);
  const handleRightClick = (idx: number) => {
    if (selectedLeft !== null) {
      setPairing((prev) => ({ ...prev, [selectedLeft]: idx }));
      setSelectedLeft(null);
    }
  };

  // Get positions for SVG lines
  const getLineCoords = () => {
    return Object.entries(pairing)
      .filter(([l, r]) => r !== null)
      .map(([l, r]) => {
        const leftIdx = Number(l);
        const rightIdx = r as number;
        const leftEl = leftRefs.current[leftIdx];
        const rightEl = rightRefs.current[rightIdx];
        if (!leftEl || !rightEl) return null;
        const leftRect = leftEl.getBoundingClientRect();
        const rightRect = rightEl.getBoundingClientRect();
        return {
          x1: leftRect.right,
          y1: leftRect.top + leftRect.height / 2,
          x2: rightRect.left,
          y2: rightRect.top + rightRect.height / 2,
        };
      })
      .filter(Boolean);
  };

  const handleCheck = () => {
    const correct = Object.keys(answer).every(
      (k) => pairing[Number(k)] === answer[Number(k)]
    );
    setIsCorrect(correct);
    if (correct) {
      setShowNotif(true);
      setTimeout(() => setShowNotif(false), 2000);
    } else {
      setShowWrongNotif(true);
      setTimeout(() => setShowWrongNotif(false), 2000);
    }
  };

  // Render
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
      {/* SVG Lines */}
      
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
        {getLineCoords()?.map((line, i) => (
          <line
            key={i}
            x1={line!.x1}
            y1={line!.y1}
            x2={line!.x2}
            y2={line!.y2}
            stroke="#c83e4d"
            strokeWidth={4}
          />
        ))}
      </svg>
      {/* Judul/Instruksi */}
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
      {step === 2 && (
        <>
          <div className="mb-10 mt-4 z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#32373b] text-center font-fredoka">
              Ayo pilih Sambung kata ini...
            </h2>
          </div>
          {/* Words */}
          <div className="flex gap-32 z-10 mb-10 font-fredoka">
            <div className="flex flex-col gap-8">
              {leftWords.map((word, idx) => (
                <div
                  key={word}
                  ref={el => leftRefs.current[idx] = el}
                  className={`bg-[#c83e4d] text-white font-bold rounded-xl px-8 py-3 text-lg shadow cursor-pointer ${selectedLeft === idx ? "ring-4 ring-[#f4b860]" : ""}`}
                  onClick={() => handleLeftClick(idx)}
                >
                  {word}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              {rightWords.map((word, idx) => (
                <div
                  key={word}
                  ref={el => rightRefs.current[idx] = el}
                  className="bg-white border-2 border-[#c83e4d] rounded-xl px-8 py-3 text-lg font-bold text-[#c83e4d] min-w-[120px] min-h-[48px] flex items-center justify-center cursor-pointer"
                  onClick={() => handleRightClick(idx)}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
          {/* Button di tengah bawah kata */}
          <div className="flex flex-col items-center z-10">
            <button
              className={`px-8 py-2 font-fredoka rounded-full font-bold shadow transition-colors text-lg ${
                isCorrect
                  ? "bg-[#f4b860] text-[#c83e4d] hover:bg-[#ffe0b2]"
                  : "bg-[#c83e4d] text-white hover:bg-[#b73642]"
              }`}
              onClick={isCorrect
                ? () => {
                    if (current + 1 < jumlahSoal) {
                      setCurrent(current + 1);
                      setPairing({});
                      setIsCorrect(false);
                    } else {
                      alert("Selesai!");
                    }
                  }
                : handleCheck
              }
            >
              {isCorrect ? "Selanjutnya" : "Periksa"}
            </button>
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
        </>
      )}
    </div>
  );
};
