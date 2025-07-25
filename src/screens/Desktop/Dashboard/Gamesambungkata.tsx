import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

const translations = {
  id: {
    pilihSoal: "Kamu mau pilih berapa soal?",
    soal5: "5 soal",
    soal10: "10 soal",
    periksa: "Periksa",
    selanjutnya: "Selanjutnya",
    benar: "Jawaban kamu benar!",
    instruksi: "Ayo pilih Sambung kata ini...",
  },
  en: {
    pilihSoal: "How many questions do you want?",
    soal5: "5 questions",
    soal10: "10 questions",
    periksa: "Check",
    selanjutnya: "Next",
    benar: "Your answer is correct!",
    instruksi: "Choose the correct word pair...",
  }
};

const questions = [
  {
    left: ["Tidur", "Makan"],
    right: ["Mangan", "TURU"],
    answer: { 0: 1, 1: 0 }, // left[0] -> right[1], left[1] -> right[0]
  },
  // Tambahkan soal lain sesuai kebutuhan
];

export const Gamesambungkata = () => {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [step, setStep] = useState<1 | 2>(1);
  const [jumlahSoal, setJumlahSoal] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState<{ [key: number]: number }>({});
  const [showNotif, setShowNotif] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Drag & drop logic
  const leftWords = questions[current].left;
  const rightWords = questions[current].right;

  // userAnswer: {0: 1, 1: 0} artinya left[0] -> right[1], left[1] -> right[0]
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const leftIdx = parseInt(result.draggableId.replace("left-", ""));
    const rightIdx = result.destination.index;
    setUserAnswer((prev) => ({ ...prev, [leftIdx]: rightIdx }));
  };

  const handleCheck = () => {
    // Cek jawaban
    const correct = Object.keys(questions[current].answer).every(
      (k) => userAnswer[Number(k)] === questions[current].answer[Number(k)]
    );
    setIsCorrect(correct);
    setShowNotif(true);
    setTimeout(() => setShowNotif(false), 2000);
  };

  const handleNext = () => {
    if (current + 1 < (jumlahSoal || 1)) {
      setCurrent(current + 1);
      setUserAnswer({});
      setIsCorrect(false);
    } else {
      // Selesai, bisa redirect atau tampilkan hasil
      alert("Selesai!");
    }
  };

  // UI
  return (
    <div className="min-h-screen bg-[#fdf6ec] flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Switch Bahasa */}
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

      {/* Step 1: Pilih jumlah soal */}
      {step === 1 && (
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#32373b] text-center mb-10 mt-4 font-fredoka">
            {translations[lang].pilihSoal}
          </h1>
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <button
              className="border-4 border-[#FFC14D] rounded-2xl py-4 px-8 font-extrabold text-[#32373b] text-center text-lg transition-all duration-200 hover:bg-[#fff7e6]"
              onClick={() => { setJumlahSoal(5); setStep(2); }}
            >
              {translations[lang].soal5}
            </button>
            <button
              className="border-4 border-[#FFC14D] rounded-2xl py-4 px-8 font-extrabold text-[#32373b] text-center text-lg transition-all duration-200 hover:bg-[#fff7e6]"
              onClick={() => { setJumlahSoal(10); setStep(2); }}
            >
              {translations[lang].soal10}
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Soal drag & drop */}
      {step === 2 && (
        <div className="flex flex-col items-center gap-8 w-full">
          <h2 className="text-xl md:text-2xl font-bold text-[#32373b] text-center font-fredoka mt-8 mb-4">
            {translations[lang].instruksi}
          </h2>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex flex-row gap-12 justify-center">
              {/* Left words (draggable) */}
              <Droppable droppableId="left" isDropDisabled>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-6">
                    {leftWords.map((word, idx) => (
                      <Draggable key={`left-${idx}`} draggableId={`left-${idx}`} index={idx}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-[#c83e4d] text-white font-bold rounded-xl px-8 py-3 text-lg shadow flex items-center gap-2"
                          >
                            {word}
                            <span className="ml-2 text-[#c83e4d]">•</span>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {/* Right words (droppable) */}
              <Droppable droppableId="right" direction="vertical">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-6">
                    {rightWords.map((word, idx) => (
                      <div
                        key={`right-${idx}`}
                        className={`bg-white border-2 border-[#c83e4d] rounded-xl px-8 py-3 text-lg font-bold text-[#c83e4d] min-w-[120px] min-h-[48px] flex items-center justify-center`}
                        style={{
                          background: Object.values(userAnswer).includes(idx) ? "#ffeaea" : "white"
                        }}
                      >
                        {word}
                      </div>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          {/* Tombol Periksa / Selanjutnya */}
          <button
            className={`mt-8 px-8 py-2 rounded-full font-bold shadow transition-colors text-lg ${
              isCorrect
                ? "bg-[#f4b860] text-[#c83e4d] hover:bg-[#ffe0b2]"
                : "bg-[#c83e4d] text-white hover:bg-[#b73642]"
            }`}
            onClick={isCorrect ? handleNext : handleCheck}
          >
            {isCorrect ? translations[lang].selanjutnya : translations[lang].periksa}
          </button>
          {/* Notifikasi benar */}
          {showNotif && isCorrect && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold z-50">
              {translations[lang].benar}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
