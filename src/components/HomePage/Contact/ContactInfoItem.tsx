import type { ReactNode } from "react";
type ContactInfoItemProps = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
};

export default function ContactInfoItem({
  icon,
  label,
  value,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-pink-200 mb-1">
          {label}
        </p>

        <div className="text-white/90">{value}</div>
      </div>
    </div>
  );
}
