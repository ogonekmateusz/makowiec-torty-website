export default function GalleryNavButton({
  item,
  active,
  setActiveId,
}: {
  item: { id: number; title: string };
  active: boolean;
  setActiveId: (id: number) => void;
}) {
  return (
    <button
      key={item.id}
      onClick={() => setActiveId(item.id)}
      className={`
              relative overflow-hidden rounded-full border px-6 py-3 text-sm uppercase tracking-[0.2em]
              transition-all duration-300 md:px-8
              ${
                active
                  ? "bg-(--primary) text-(--text-white) border-(--primary) shadow-(--shadow-primary)"
                  : "bg-white/70 backdrop-blur text-(--text-secondary) border-(--border) hover:border-(--primary-light) hover:text-(--primary) hover:bg-(--background-secondary)"
              }
            `}
    >
      <span className="relative z-10">{item.title}</span>
    </button>
  );
}
