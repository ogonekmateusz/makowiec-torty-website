import type { SocialButtonProps } from "../../../types/socialButton";
export default function SocialButton({ children, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12
        h-12
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur
        flex
        items-center
        justify-center
        text-stone-300
        transition-all
        duration-300
        hover:bg-(--primary)
        hover:text-white
        hover:border-(--primary)
        hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}
