import SectionContainer from "../../components/shared/SectionContainer";
import scrollToHash from "../../utils/ScrollToHash";
import FooterBrand from "../../components/HomePage/Footer/FooterBrand";
import FooterNavigation from "../../components/HomePage/Footer/FooterNavigation";
import FooterContact from "../../components/HomePage/Footer/FooterContact";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-(--background-dark) text-(--text-white) pt-24 pb-10">
      {/* dekoracyjne blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-(--primary)/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--primary-soft)/10 rounded-full blur-3xl" />

      <SectionContainer isSiteSection={true}>
        <div className="relative z-10">
          {/* top */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-14 pb-16 border-b border-white/10">
            <FooterBrand />

            <FooterNavigation />

            <FooterContact />
          </div>

          {/* bottom */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Makowiec Torty. Wszystkie prawa
              zastrzeżone.
            </p>

            <button
              onClick={() => scrollToHash("#")}
              className="
                text-stone-600
                text-sm
                transition-all
                duration-300
                hover:text-white
              "
            >
              <p>Designed and developed by <a href="#">Mateusz Ogonek</a></p>
            </button>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
