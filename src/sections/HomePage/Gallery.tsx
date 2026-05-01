import { useFetch } from "../../hooks/useFetch";
import { getCakes } from "../../api/cakes";
import type { Cake } from "../../types/cake";

export default function Gallery() {
  const cakes = useFetch<Cake[]>(getCakes);
  const cakesCategories = [];

  cakes?.forEach((cake) => {
    if (!cakesCategories.includes(cake.category)) {
      cakesCategories.push(cake.category);
    }
  });

  return (
    <div>
      {cakes ? (
        cakes.map((cake) => (
          <div key={cake.id}>
            <h2>{cake.name}</h2>
            <p>{cake.description}</p>
            <p>{cake.category}</p>
            <img src={cake.image_url} alt={cake.name} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
