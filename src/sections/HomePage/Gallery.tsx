import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { getCakes } from "../../api/cakes";

import type { Cake } from "../../types/cake";
import type { cakeCategory } from "../../types/cakeCategory";

import SectionContainer from "../../components/shared/SectionContainer";
import Grid from "../../components/shared/Grid";

import GalleryNav from "../../components/HomePage/Gallery/GalleryNav";
import GalleryCard from "../../components/HomePage/Gallery/GalleryCard";
import PrimaryButton from "../../components/shared/PrimaryButton";

const VISIBLE_CAKES: number = 6;

export default function Gallery() {
  const cakes = useFetch<Cake[]>(getCakes);
  const [activeId, setActiveId] = useState(1);
  const [visibleCakes, setVisibleCakes] = useState(VISIBLE_CAKES);

  const cakesCategories: cakeCategory[] = [
    { id: 1, title: "Wszystkie" },

    ...[...new Set(cakes?.map((cake) => cake.category))].map(
      (category, index) => ({
        id: index + 2,
        title: category,
      }),
    ),
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f4f1] py-24">
      {/* dekoracje */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-pink-100 opacity-50 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-rose-100 opacity-40 blur-3xl" />

      <SectionContainer isSiteSection={true}>
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <h3 className="heading font-serif text-4xl lg:text-5xl">
              Galeria smaków
            </h3>

            <p className="text-md font-light text-stone-600 md:text-lg">
              Inspiracje tworzone z pasji do elegancji, smaku i wyjątkowych
              detali
            </p>
          </div>

          <GalleryNav
            data={cakesCategories}
            activeId={activeId}
            setActiveId={setActiveId}
          />

          <Grid
            cols="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            gap="gap-8"
            className="mt-14"
          >
            {cakes
              ?.filter((cake) => {
                if (activeId === 1) return true;

                return (
                  cake.category ===
                  cakesCategories.find((item) => item.id === activeId)?.title
                );
              })
              .slice(0, visibleCakes)
              .map((cake) => (
                <GalleryCard
                  key={cake.id}
                  id={cake.id}
                  image_url={cake.image_url}
                  category={cake.category}
                  name={cake.name}
                  description={cake.description}
                />
              ))}
          </Grid>
          <div className="flex justify-center">
            <PrimaryButton
              onClick={() => {
                if (visibleCakes >= (cakes?.length || 0)) {
                  setVisibleCakes(VISIBLE_CAKES);
                } else {
                  setVisibleCakes((prev) => prev + VISIBLE_CAKES);
                }
              }}
              className="mx-auto mt-12"
              title={
                visibleCakes >= (cakes?.length || 0)
                  ? "Pokaż mniej"
                  : "Zobacz Wszystkie"
              }
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
