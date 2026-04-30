export default function SectionContainer({
  children,
  isSiteSection,
  className = "",
}: {
  children: React.ReactNode;
  isSiteSection?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto px-4 md:px-0 ${isSiteSection ? "py-12 md:py-16 lg:py-24" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
