import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfoCard() {
  return (
    <div className="bg-[#7d3f5e] text-white rounded-4xl p-8 md:p-10 shadow-[0_20px_60px_rgba(125,63,94,0.25)] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10" />
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5" />

      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-200 mb-4">
          Kontakt
        </p>

        <h3 className="text-3xl font-semibold leading-tight mb-8">
          Studio Makowiec
        </h3>

        <div className="space-y-6">
          <ContactInfoItem
            icon={<IoIosMail className="w-5 h-5" />}
            label="Email"
            value="w.makowiec00@gmail.com"
          />

          <ContactInfoItem
            icon={<FaPhoneAlt className="w-5 h-5" />}
            label="Telefon"
            value="+48 797 098 220"
          />

          <ContactInfoItem
            icon={<IoLocationSharp className="w-5 h-5" />}
            label="Adres"
            value={
              <>
                Olszowa 152
                <br />
                Paleśnica
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
