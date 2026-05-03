import SectionContainer from "../../components/shared/SectionContainer";
import Map from "../../components/HomePage/Contact/Map";
import ContactForm from "../../components/HomePage/Contact/ContactForm";
import ContactInfoCard from "../../components/HomePage/Contact/ContactInfoCard";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-(--background) py-24">
      {/*  tło */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-(--primary-soft)/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--primary-soft)/30 rounded-full blur-3xl" />

      <SectionContainer isSiteSection={true}>
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <ContactInfoCard />
            <Map />
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}
