import { useState } from "react";
import PrimaryButton from "../../shared/PrimaryButton";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Form submitted", form);

    alert("Dziękujemy! Twoje zapytanie zostało wysłane.");

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  }

  return (
    <div
      className="
        relative
        bg-(--background-secondary)/90
        backdrop-blur
        rounded-2xl
        border
        border-(--border-light)
        shadow-(--shadow-card)
        p-8
        md:p-12
      "
    >
      <div className="max-w-xl mb-10">
        <h2 className="heading text-4xl md:text-5xl leading-tight text-(--text-primary) mb-4">
          Stwórzmy razem
          <span className="block text-(--primary)">wyjątkowy tort</span>
        </h2>

        <p className="text-(--text-secondary) leading-relaxed text-[15px]">
          Napisz kilka słów o uroczystości, stylu i smakach, które lubisz.
          Przygotuję dla Ciebie indywidualną propozycję wraz z orientacyjną
          wyceną.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* IMIĘ */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-[11px] uppercase tracking-[0.2em] text-(--text-muted)"
          >
            Twoje imię
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="np. Anna Nowak"
            required
            className="
              h-14
              rounded-2xl
              border
              border-(--border)
              bg-(--background)
              px-4
              text-(--text-primary)
              placeholder:text-(--text-muted)
              transition-all
              duration-300
              focus:border-(--primary-light)
              focus:bg-(--background-secondary)
              focus:outline-none
              focus:ring-4
              focus:ring-(--primary-soft)
            "
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[11px] uppercase tracking-[0.2em] text-(--text-muted)"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="anna@przykład.com"
            required
            className="
              h-14
              rounded-2xl
              border
              border-(--border)
              bg-(--background)
              px-4
              text-(--text-primary)
              placeholder:text-(--text-muted)
              transition-all
              duration-300
              focus:border-(--primary-light)
              focus:bg-(--background-secondary)
              focus:outline-none
              focus:ring-4
              focus:ring-(--primary-soft)
            "
          />
        </div>

        {/* TELEFON */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-[11px] uppercase tracking-[0.2em] text-(--text-muted)"
          >
            Telefon
          </label>

          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="+48 600 700 800"
            className="
              h-14
              rounded-2xl
              border
              border-(--border)
              bg-(--background)
              px-4
              text-(--text-primary)
              placeholder:text-(--text-muted)
              transition-all
              duration-300
              focus:border-(--primary-light)
              focus:bg-(--background-secondary)
              focus:outline-none
              focus:ring-4
              focus:ring-(--primary-soft)
            "
          />
        </div>

        {/* DATA */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="text-[11px] uppercase tracking-[0.2em] text-(--text-muted)"
          >
            Data uroczystości
          </label>

          <input
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            type="date"
            className="
              h-14
              rounded-2xl
              border
              border-(--border)
              bg-(--background)
              px-4
              text-(--text-secondary)
              transition-all
              duration-300
              focus:border-(--primary-light)
              focus:bg-(--background-secondary)
              focus:outline-none
              focus:ring-4
              focus:ring-(--primary-soft)
            "
          />
        </div>

        {/* WIADOMOŚĆ */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[11px] uppercase tracking-[0.2em] text-(--text-muted)"
          >
            Opowiedz o swoim wymarzonym torcie
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={7}
            required
            placeholder="Np. tort weselny w jasnych kolorach, smak pistacja-malina, około 30 porcji..."
            className="
              rounded-3xl
              border
              border-(--border)
              bg-(--background)
              px-5
              py-4
              text-(--text-primary)
              placeholder:text-(--text-muted)
              transition-all
              duration-300
              focus:border-(--primary-light)
              focus:bg-(--background-secondary)
              focus:outline-none
              focus:ring-4
              focus:ring-(--primary-soft)
              resize-none
            "
          />
        </div>

        {/* BUTTON */}
        <div className="md:col-span-2 pt-2">
          <div className="inline-block">
            <PrimaryButton title="Wyślij zapytanie" />
          </div>
        </div>
      </form>
    </div>
  );
}
