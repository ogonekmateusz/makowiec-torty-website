// FooterNavigation.tsx
import scrollToHash from "../../../utils/ScrollToHash";

const NAVIGATION = [
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

export default function FooterNavigation() {
  return (
    <div>
      <p className="uppercase tracking-[0.25em] text-xs text-(--primary-soft) mb-6">
        Nawigacja
      </p>

      <div className="flex flex-col gap-4">
        {NAVIGATION.map((item) => (
          <button
            key={item.title}
            onClick={() => scrollToHash(item.href)}
            className="
              text-left
              text-stone-300
              transition-all
              duration-300
              hover:text-white
              hover:translate-x-1
            "
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
