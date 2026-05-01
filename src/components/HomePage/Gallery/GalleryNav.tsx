import type { cakeCategory } from "../../../types/cakeCategory";
import GalleryNavButton from "./GalleryNavButton";
interface GalleryNavProps {
  data: cakeCategory[];
  activeId: number;
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
}

export default function GalleryNav({
  data,
  activeId,
  setActiveId,
}: GalleryNavProps) {
  return (
    <nav className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-5">
      {data.map((item: cakeCategory) => {
        const active = item.id === activeId;

        return (
          <GalleryNavButton
            key={item.id}
            item={item}
            active={active}
            setActiveId={setActiveId}
          />
        );
      })}
    </nav>
  );
}
