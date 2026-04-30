type NavbarItemProps = {
  title: string;
  href?: string;
};

export default function NavbarItem({ title, href }: NavbarItemProps) {
  return (
    <a
      href={href}
      className="
        relative
        px-5 py-3
        rounded-full
        text-sm uppercase tracking-[0.2em]
        text-(--text-secondary)
        hover:text-(--primary)
        transition-all duration-300
        hover:bg-[rgba(255,255,255,0.8)]
        group
      "
    >
      <span className="relative z-10">{title}</span>
      <span
        className="
          absolute bottom-2 left-1/2
          -translate-x-1/2
          w-0 h-0.5
          bg-(--primary)
          rounded-full
          transition-all duration-300
          group-hover:w-8
        "
      />
    </a>
  );
}
