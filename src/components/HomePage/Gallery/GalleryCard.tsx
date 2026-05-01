import type { Cake } from "../../../types/cake";

export default function GalleryCard({
  name,
  description,
  category,
  image_url,
}: Cake) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-(--background-secondary)
        shadow-(--shadow-card)
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-(--shadow-primary)
      "
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={image_url}
          alt={name}
          loading="lazy"
          className="
            h-130 w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* overlay */}
        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/50
            via-black/10
            to-transparent
            opacity-80
          "
        />

        {/* category */}
        <div className="absolute top-5 left-5">
          <span
            className="
              rounded-full
              bg-white/90
              px-4 py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-(--primary)
              shadow-sm
              backdrop-blur
            "
          >
            {category}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-4 p-7">
        <div>
          <h3
            className="
              heading
              text-2xl
              leading-snug
              text-(--text-primary)
              transition-colors duration-300
              group-hover:text-(--primary)
            "
          >
            {name}
          </h3>
        </div>

        <p
          className="
            text-[15px]
            leading-relaxed
            text-(--text-secondary)
          "
        >
          {description}
        </p>

        {/* line */}
        <div className="pt-2">
          <div
            className="
              h-0.5
              w-14
              rounded-full
              bg-(--primary)
              transition-all duration-500
              group-hover:w-24
            "
          />
        </div>
      </div>
    </article>
  );
}
