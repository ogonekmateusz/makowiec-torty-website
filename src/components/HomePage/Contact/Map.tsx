export default function Map() {
  return (
    <div className="overflow-hidden rounded-4xl border border-white bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.7165075537305!2d20.806492051524117!3d49.80753246570109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d8d5cd374f593%3A0x469fde8e394f2f83!2sOlszowa!5e0!3m2!1spl!2spl!4v1777557075011!5m2!1spl!2spl"
        className="w-full h-80 border-0 grayscale-[0.15]"
        loading="lazy"
      />
    </div>
  );
}
