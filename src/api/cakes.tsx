import { supabase } from "../utils/supabase";
import type { Cake } from "../types/cake";

export async function getCakes(): Promise<Cake[]> {
  const { data, error } = await supabase.from("cakes").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data as Cake[];
}
