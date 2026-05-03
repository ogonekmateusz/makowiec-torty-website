export default function FooterContact() {
  return (
    <div>
      <p className="uppercase tracking-[0.25em] text-xs text-(--primary-soft) mb-6">
        Kontakt
      </p>

      <div className="space-y-5">
        <div>
          <p className="text-stone-500 text-sm mb-1">Email</p>

          <a
            href="mailto:w.makowiec00@gmail.com"
            className="
              text-stone-200
              transition-all
              duration-300
              hover:text-white
            "
          >
            w.makowiec00@gmail.com
          </a>
        </div>

        <div>
          <p className="text-stone-500 text-sm mb-1">Telefon</p>

          <a
            href="tel:+48123456789"
            className="
              text-stone-200
              transition-all
              duration-300
              hover:text-white
            "
          >
            +48 797 098 220
          </a>
        </div>

        <div>
          <p className="text-stone-500 text-sm mb-1">Adres</p>

          <p className="text-stone-200">
            Olszowa 152
            <br />
            Paleśnica
          </p>
        </div>
      </div>
    </div>
  );
}
