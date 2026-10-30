import { existsSync } from "fs";
import { join } from "path";
import coca from "@/lib/data/coca.json";

export type Branca = "coca" | "lc" | "eg" | "rs";

export type CocaMember = {
  id: string;
  nome: string;
  cognome: string;
  ruolo: string;
  unita: string;
  branca: Branca;
  imageSrc: string;
};

/** Members of the Comunità Capi, with the profile picture resolved */
export function getCocaMembers(): CocaMember[] {
  return coca.map((item) => {
    // Use local image if it exists, otherwise fallback to DiceBear API
    const imageExists = existsSync(join(process.cwd(), "public", "images", "coca", `${item.id}.jpg`));
    return {
      id: item.id,
      nome: item.Nome,
      cognome: item.Cognome,
      ruolo: item.ruolo,
      unita: item.unita,
      branca: item.branca as Branca,
      imageSrc: imageExists ? `/images/coca/${item.id}.jpg` : `https://api.dicebear.com/9.x/thumbs/svg?seed=${item.id}`,
    };
  });
}
