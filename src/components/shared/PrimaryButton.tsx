import type { PrimaryButtonProps } from "../../types/primaryButton";

export default function PrimaryButton({
  title,
  className = "",
  onClick,
  isActive = false,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden

        inline-flex
        items-center
        justify-center

        px-3 sm:px-6 md:px-8
        py-2 md:py-4

        rounded-full
        border

        text-[10px] sm:text-[12px] md:text-[15px]
        uppercase

        tracking-[0.12em] md:tracking-[0.18em]
        font-medium

        transition-all
        duration-300

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
      <span
        className="
          absolute inset-0 -translate-x-full
          bg-linear-to-r from-transparent via-white/40 to-transparent
          skew-x-[-20deg]
          transition-transform duration-700
          group-hover:translate-x-[200%]
        "
      />

      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-3">
        {title}

        <svg
          className="
            w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4
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
