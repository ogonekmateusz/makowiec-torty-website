import PrimaryButton from "../../shared/PrimaryButton";
import SectionContainer from "../../shared/SectionContainer";
import { useEffect, useState } from "react";
import scrollToHash from "../../../utils/ScrollToHash";
import NavbarItem from "./NavbarItem";
import { FaInstagram } from "react-icons/fa";
const NAVBAR_ITEMS = [
  {
    title: "Galeria",
    href: "#gallery",
  },
  {
    title: "O mnie",
    href: "#hero",
  },
  {
    title: "Kontakt",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "py-4" : "py-6"}
      `}
    >
      <SectionContainer>
        <div
          className={`
            flex items-center justify-between
            px-4 sm:px-6 md:px-8 lg:px-10
            rounded-full
            border
            transition-all duration-500

            ${
              scrolled
                ? `
                  bg-[rgba(255,255,255,0.8)]
                  backdrop-blur-xl
                  border-(--border-light)
                  shadow-(--shadow-card)
                `
                : `
                  bg-[rgba(255,255,255,0.6)]
                  backdrop-blur-md
                  border-(--border-light)
                `
            }
          `}
        >
          <button
            onClick={() => scrollToHash("")}
            className="group py-3 md:py-5 flex items-center gap-3"
          >
            <div
              className="
                w-10 h-10
                rounded-full
                bg-(--primary)
                flex items-center justify-center
                shadow-(--shadow-primary)
              "
            >
              <span className="text-(--text-white) text-lg">🍰</span>
            </div>

            <div className="flex flex-col items-start leading-none">
              <span
                className="
                  heading italic
                  text-lg sm:text-xl md:text-2xl
                  text-(--text-primary)
                "
              >
                MakowiecTorty
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-3 lg:gap-5">
            {NAVBAR_ITEMS.map((item) => (
              <NavbarItem
                key={item.title}
                title={item.title}
                href={item.href}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/makowiec_torty/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden lg:flex
                w-11 h-11
                rounded-full
                border border-(--border)
                items-center justify-center
                text-(--text-secondary)
                hover:text-(--primary)
                hover:border-(--primary-light)
                transition-all duration-300
                bg-[rgba(255,255,255,0.7)]
              "
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <PrimaryButton
              title="Zamów teraz"
              onClick={() => scrollToHash("#contact")}
            />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
