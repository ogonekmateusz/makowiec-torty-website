import scrollToHash from "../../../utils/ScrollToHash";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import SocialButton from "./SocialButton";

export default function FooterBrand() {
  return (
    <div>
      <button
        onClick={() => scrollToHash("#")}
        className="flex items-center gap-4 group"
      >
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-(--primary)
            flex
            items-center
            justify-center
            shadow-(--shadow-primary)
          "
        >
          <span className="text-2xl">🍰</span>
        </div>

        <div>
          <h2 className="heading italic text-3xl text-white">MakowiecTorty</h2>

          <p className="uppercase tracking-[0.25em] text-[11px] text-(--primary-soft) mt-1">
            Weronika Makowiec
          </p>
        </div>
      </button>

      <p className="text-stone-300 leading-relaxed mt-8 max-w-md text-[15px]">
        Tworzę wyjątkowe torty na najważniejsze chwile — pełne smaku, elegancji
        i ręcznie wykonywanych detali, które zachwycają od pierwszego
        spojrzenia.
      </p>

      {/* socials */}
      <div className="flex items-center gap-4 mt-8">
        <SocialButton href="https://www.instagram.com/makowiec_torty/">
          <FaInstagram className="w-4 h-4" />
        </SocialButton>

        <SocialButton href="https://www.facebook.com/weronika.makowiec.92">
          <FaFacebookF className="w-4 h-4" />
        </SocialButton>
      </div>
    </div>
  );
}
