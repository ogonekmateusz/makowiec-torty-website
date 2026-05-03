import Grid from "../../components/shared/Grid";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SectionContainer from "../../components/shared/SectionContainer";
import scrollToHash from "../../utils/ScrollToHash";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero({id}: {id: string}) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#f8f4f1] min-h-screen flex items-center py-24">
      {/* dekoracyjne blur */}
      <div className="absolute -top-30 -left-30 w-105 h-105 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-30 w-125 h-125 bg-rose-100/50 rounded-full blur-3xl" />

      {/* siatka tła */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[60px_60px]" />

      <SectionContainer isSiteSection={true}>
        <Grid
          cols="grid-cols-1 lg:grid-cols-[1fr_0.95fr]"
          className="relative z-10 items-center gap-16"
        >
          {/* LEWA STRONA */}
          <div className="flex flex-col justify-center items-start">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-pink-100 px-5 py-2 rounded-full shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7d3f5e]" />

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#7d3f5e] font-medium">
                Weronika Makowiec
              </p>
            </div>

            {/* heading */}
            <h1 className="heading text-[3.3rem] leading-[1.05] md:text-[5rem] lg:text-[6.5rem] font-medium text-stone-900 max-w-3xl">
              Torty tworzone
              <span className="block text-[#7d3f5e]">z pasji i elegancji</span>
            </h1>

            {/* text */}
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-stone-600 max-w-2xl font-light">
              Wyjątkowe torty artystyczne przygotowywane z najwyższą
              starannością — pełne subtelnych detali, pięknych kompozycji i
              niezapomnianego smaku.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              <PrimaryButton
                title="Zobacz galerię"
                onClick={() => scrollToHash("#gallery")}
                className="px-8 py-4 text-lg shadow-lg shadow-[#7d3f5e]/20"
              />

              <button
                onClick={() => scrollToHash("#contact")}
                className="group flex items-center gap-3 text-stone-700 hover:text-[#7d3f5e] transition"
              >
                <span className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:border-[#7d3f5e] transition cursor-pointer">
                  <IoIosArrowRoundForward className="w-6 h-6" />
                </span>

                <span className="uppercase tracking-[0.2em] text-sm">
                  Kontakt
                </span>
              </button>
            </div>
          </div>

          {/* PRAWA STRONA */}
          <div className="relative flex justify-center lg:justify-end">
            {/* glow */}
            <div className="absolute inset-0 bg-linear-to-tr from-pink-200/20 to-transparent rounded-full blur-3xl scale-125" />

            {/* image wrapper */}
            <div className="relative">
              {/* floating card */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur shadow-xl rounded-3xl px-6 py-4 border border-white z-20">
                <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 mb-1">
                  Własnoręcznie dekorowane
                </p>

                <p className="text-stone-800 font-medium">
                  Torty tworzone na zamówienie
                </p>
              </div>

              {/* main image */}
              <div className="relative w-[320px] md:w-112.5 lg:w-135 rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
                <img
                  src="./tortHero.png"
                  alt="Artystyczny tort premium"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Grid>
      </SectionContainer>
    </section>
  );
}
