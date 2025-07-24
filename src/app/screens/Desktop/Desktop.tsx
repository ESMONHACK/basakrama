import * as React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Desktop = (): React.JSX.Element => {
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
        <main className="bg-[#fdf6ec] flex flex-col items-center min-h-screen w-full">
            <div className="bg-[#fdf6ec] overflow-hidden w-full max-w-[1440px] relative px-4 sm:px-8">
                {/* Hero Section */}
                <section className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:h-[700px]">
                    {/* Ilustrasi kiri */}
                    <img
                        className="w-[250px] h-[240px] mt-8 md:w-[400px] md:h-[386px] md:mt-[63px] md:ml-[69px] md:static md:relative"
                        alt="Mail sent pana"
                        src="/mail-sent-pana.png"
                    />

                    {/* Logo/ornamen kanan atas */}
                    <img
                        className="hidden md:block absolute w-[120px] h-[120px] top-0 right-4 md:w-[184px] md:h-[184px] md:right-[67px] object-cover"
                        alt="Hackaton"
                        src="/hackaton-01-1.png"
                    />

                    {/* Konten utama */}
                    <div className="flex flex-col items-center md:items-start md:absolute md:top-[130px] md:left-[550px] w-full md:w-[650px] z-10">
                        <div className="font-normal text-2xl sm:text-3xl md:text-4xl text-center md:text-left tracking-[0] leading-9 font-din mb-6">
                            <span className="font-bold text-[#32373b]">
                                Cara yang menyenangkan dan efektif untuk belajar
                            </span>
                            <span className="font-bold text-[#c83e4d]"> bahasa </span>
                            <span className="font-bold text-[#32373b]">dan </span>
                            <span className="font-bold text-[#c83e4d]"> budaya</span>
                        </div>
                        <div className="flex flex-col gap-4 w-full items-center md:items-start">
                            <Button className="w-full max-w-[320px] md:w-[320px] md:h-[60px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] font-bold text-white text-xl md:text-2xl">
                                Mulai
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full max-w-[320px] md:w-[320px] md:h-[60px] rounded-[25px] border-[3px] md:border-[5px] border-solid border-[#f4d6cc] shadow-[5px_5px_4px_#00000040] font-bold text-[#f4b860] text-xl md:text-2xl bg-white"
                            >
                                Sudah punya akun
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Fun and Effective Section */}
                <section className="relative mt-[300px]">
                    <h2 className="w-[593px] mx-auto [font-family:'Fredoka',Helvetica] font-bold text-[#c83e4d] text-5xl text-center">
                        menyenangkan dan efektif
                    </h2>

                    <div className="flex mt-[40px]">
                        <div className="w-[550px] ml-28 [font-family:'DIN_Round_Pro-Medium',Helvetica] font-medium text-[#32373b] text-[32px]">
                            Belajar bersama Basa Krama itu menyenangkan dan efektif! Aplikasi
                            ini adalah platform edukatif interaktif berbasis budaya yang
                            dirancang untuk melatih logika berbahasa anak-anak dan remaja.
                        </div>

                        <img
                            className="w-[647px] h-[626px]"
                            alt="Snowman pana"
                            src="/snowman-pana.png"
                        />
                    </div>
                </section>

                {/* Always Motivated Section */}
                <section className="relative mt-[100px] mx-[82px] flex items-center">
                    <img
                        className="w-[742px] h-[477px]"
                        alt="Follow the leader"
                        src="/follow-the-leader-pana.png"
                    />

                    <div className="ml-[50px]">
                        <h2 className="w-[593px] [font-family:'Fredoka',Helvetica] font-bold text-[#c83e4d] text-5xl text-center mb-[67px]">
                            selalu termotivasi
                        </h2>

                        <p className="w-[550px] [font-family:'DIN_Round_Pro-Medium',Helvetica] font-medium text-[#32373b] text-[32px]">
                            Kami mempermudah pembentukan kebiasan belajar bahasa budaya dengan
                            fitur-fitur mirip game dan tantangan seru. Seperti sambung kata,
                            bubble kata, dan tebak suara
                        </p>
                    </div>
                </section>

                {/* Cultural Facts Section */}
                <section className="mt-[200px]">
                    <h2 className="w-[509px] mx-auto [font-family:'Fredoka',Helvetica] font-bold text-[#c83e4d] text-5xl text-center mb-[106px]">
                        Fakta Menarik Budaya di Indonesia
                    </h2>

                    <img
                        className="w-[1027px] h-[479px] mx-auto"
                        alt="Indo MENTION"
                        src="/indo-mention-raagghhh-01-1.png"
                    />

                    {/* Cultural Facts Cards */}
                    {culturalFacts.map((fact, index) => (
                        <Card
                            key={index}
                            className="border-none shadow-none bg-transparent mt-[100px]"
                        >
                            <CardContent className="p-0">
                                <div className="flex flex-row-reverse items-center justify-between mx-[100px]">
                                    {index % 2 === 0 ? (
                                        <>
                                            <img
                                                className="w-[724px] h-[747px] object-cover"
                                                alt={fact.imageAlt}
                                                src={fact.image}
                                            />
                                            <div className="w-[672px]">
                                                <h3
                                                    className={`w-[400px] [font-family:'Fredoka',Helvetica] font-bold text-[#c83e4d] text-5xl ${fact.titlePosition === "right" ? "text-right ml-auto" : ""} mb-[20px]`}
                                                >
                                                    {fact.title}
                                                </h3>
                                                <p className="[font-family:'DIN_Round_Pro-Medium',Helvetica] font-medium text-[#32373b] text-[32px] text-right">
                                                    {fact.description}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-[476px]">
                                                <h3
                                                    className={`w-[400px] [font-family:'Fredoka',Helvetica] font-bold text-[#c83e4d] text-5xl mb-[20px]`}
                                                >
                                                    {fact.title}
                                                </h3>
                                                <p className="[font-family:'DIN_Round_Pro-Medium',Helvetica] font-medium text-[#32373b] text-[32px]">
                                                    {fact.description}
                                                </p>
                                            </div>
                                            <img
                                                className="w-[774px] h-[545px]"
                                                alt={fact.imageAlt}
                                                src={fact.image}
                                            />
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                {/* Call to Action Section */}
                <section className="mt-[200px] text-center">
                    <h2 className="w-[520px] mx-auto [font-family:'Fredoka',Helvetica] font-bold text-6xl mb-[100px]">
                        <span className="text-[#32373b]">
                            Belajar bahasa daerah dengan{" "}
                        </span>
                        <span className="text-[#c83e4d]">basa krama</span>
                    </h2>

                    <Button className="w-[437px] h-[72px] bg-[#c83e4d] rounded-[25px] shadow-[5px_5px_4px_#00000040] [font-family:'Fredoka',Helvetica] font-bold text-white text-4xl">
                        Mulai
                    </Button>

                    <div className="relative mt-[50px]">
                        <img
                            className="w-[567px] h-[500px] mx-auto object-cover"
                            alt="Woooo"
                            src="/woooo-01-1.png"
                        />

                        <img
                            className="w-full h-[435px] absolute bottom-[-132px] left-0"
                            alt="Rectangle"
                            src="/rectangle-32.svg"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};
