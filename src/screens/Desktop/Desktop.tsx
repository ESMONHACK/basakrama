import React from "react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "../../components/ui/card";

export const Desktop: React.FC = () => {
  const navigate = useNavigate();
  // Data for facts about Indonesia
  const culturalFacts = [
    {
      title: "Kepulauan",
      description:
        "Negara kepulauan terbesar di dunia dengan 17.508 pulau yang tersebar dari Sabang hingga Merauke.",
      image: "/indo-mention-raagghhh-01-1.png",
      imageAlt: "Indo MENTION",
      titlePosition: "right",
    },
    {
      title: "Bahasa Daerah",
      description:
        "Terdapat lebih dari 718 bahasa daerah yang digunakan oleh berbagai masyarakat lokal di seluruh nusantara.",
      image: "/-pngtree-gadang-traditional-house-vector-9072725-1.png",
      imageAlt: "Pngtreegadang",
      titlePosition: "left",
    },
    {
      title: "Suku Bangsa",
      description:
        "Indonesia memiliki 1.340 suku bangsa yang memperkaya keragaman tradisi dan adat istiadat.",
      image: "/-pngtree-baju-adat-indonesia-8152047-1.png",
      imageAlt: "Pngtreebaju adat",
      titlePosition: "right",
    },
  ];

  return (
    <main className="bg-[#fdf6ec] flex flex-col items-center w-full min-h-screen">
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
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-bold mb-8 lg:mb-12 leading-tight text-center lg:text-left">
              <span className="text-[#32373b] block">
                Cara yang menyenangkan dan efektif
              </span>
              <span className="text-[#32373b] block">
                untuk belajar <span className="text-[#c83e4d]">bahasa</span> dan <span className="text-[#c83e4d]">budaya</span>
              </span>
            </h1>

            <div className="flex flex-col gap-4 w-full max-w-md">
              <Button className="w-full h-14 lg:h-16 xl:h-[72px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] font-bold text-white text-xl lg:text-2xl xl:text-4xl hover:bg-[#b73642] transition-colors">
                Mulai
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 lg:h-16 xl:h-[72px] rounded-[25px] border-4 lg:border-[5px] border-solid border-[#f4d6cc] shadow-[5px_5px_4px_#00000040] font-bold text-[#f4b860] text-xl lg:text-2xl xl:text-4xl hover:bg-[#f4b860] transition-colors"
                onClick={() => navigate("/login")}
              >
                Sudah punya akun
              </Button>
            </div>
          </div>
        </section>

        {/* Fun and Effective Section */}
        <section className="py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Kiri: Judul & Deskripsi */}
            <div className="w-full lg:w-1/2 px-4 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#c83e4d] mb-2">
                menyenangkan dan efektif
              </h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-[#32373b]">
                Belajar bersama Basa Krama itu menyenangkan dan efektif! Aplikasi ini adalah platform edukatif interaktif berbasis budaya yang dirancang untuk melatih logika berbahasa anak-anak dan remaja.
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

            <div className="w-full lg:w-1/2 px-4 lg:px-8 order-1 lg:order-2">
              <h2 className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#c83e4d] mb-2">
                selalu termotivasi
              </h2>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium text-[#32373b] text-center lg:text-left leading-relaxed">
                Kami mempermudah pembentukan kebiasan belajar bahasa budaya dengan
                fitur-fitur mirip game dan tantangan seru. Seperti sambung kata,
                bubble kata, dan tebak suara
              </p>
            </div>
          </div>
        </section>

        

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:mb-16 px-4 leading-tight">
            <span className="text-[#32373b]">
              Belajar bahasa daerah dengan{" "}
            </span>
            <span className="text-[#c83e4d]">basa krama</span>
          </h2>

          <div className="flex justify-center mb-8 lg:mb-12">
            <Button className="w-full max-w-md h-14 lg:h-16 xl:h-[72px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] font-bold text-white text-xl lg:text-2xl xl:text-4xl hover:bg-[#b73642] transition-colors">
              Mulai
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