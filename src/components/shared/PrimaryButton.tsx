type PrimaryButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
};

export default function PrimaryButton({
  title,
  className = "",
  onClick,
  isActive = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden
        inline-flex items-center justify-center

        px-6 md:px-8
        py-3.5 md:py-4

        rounded-full
        border

        text-sm md:text-[15px]
        uppercase tracking-[0.18em]
        font-medium

        transition-all duration-300
        cursor-pointer

        backdrop-blur-sm

        hover:-translate-y-0.5
        active:translate-y-0

        focus:outline-none
        focus:ring-4
        focus:ring-(--primary-soft)

        ${
          isActive
            ? `
              bg-(--primary)
              text-(--text-white)
              border-(--primary)

              shadow-(--shadow-primary)
            `
            : `
              bg-[rgba(255,255,255,0.8)]

              text-(--text-secondary)
              border-(--border)

              hover:border-(--primary-light)
              hover:text-(--primary)
              hover:bg-(--background-secondary)

              hover:shadow-(--shadow-card)
            `
        }

        ${className}
      `}
    >
      {/* shine */}
      <span
        className="
          absolute inset-0
          -translate-x-full

          bg-linear-to-r
          from-transparent
          via-white/40
          to-transparent

          skew-x-[-20deg]

          transition-transform
          duration-700

          group-hover:translate-x-[200%]
        "
      />

      {/* content */}
      <span className="relative z-10 flex items-center gap-3">
        {title}

        <svg
          className="
            w-4 h-4
            transition-transform duration-300
            group-hover:translate-x-1
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    </button>
  );
}
