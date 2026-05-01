import PrimaryButton from "../../shared/PrimaryButton";
import SectionContainer from "../../shared/SectionContainer";
import { useEffect, useState } from "react";
import scrollToHash from "../../../utils/ScrollToHash";
import NavbarItem from "./NavbarItem";

const NAVBAR_ITEMS = [
  {
    title: "Galeria",
    href: "#gallery",
  },
  {
    title: "O mnie",
    href: "#about",
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
            px-6 md:px-8 lg:px-10
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
            className="group py-5 flex items-center gap-3"
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
                  text-xl md:text-2xl
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a.9.9 0 100 1.8.9.9 0 000-1.8zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
              </svg>
            </a>

            <PrimaryButton
              title="Zamów teraz"
              onClick={() => scrollToHash("#contact")}
              className="px-6 md:px-7"
            />
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
