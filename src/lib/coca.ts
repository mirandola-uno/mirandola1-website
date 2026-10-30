import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";
import { z } from "zod";

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

const cocaFile = join(process.cwd(), "content", "coca.yaml");

// shape of content/coca.yaml, see the comment at the top of the file
const cocaSchema = z.object({
  unita: z.array(
    z.object({
      nome: z.string(),
      branca: z.enum(["coca", "lc", "eg", "rs"]),
      capi: z.array(
        z.object({
          nome: z.string(),
          cognome: z.string(),
          ruolo: z.string(),
          codice: z.number().int().optional(),
          id: z.string().optional(),
        }),
      ),
    }),
  ),
});

// "Da Como", "Chiara" -> "da-como-chiara"
const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Members of the Comunità Capi, with the profile picture resolved */
export function getCocaMembers(): CocaMember[] {
  const result = cocaSchema.safeParse(parse(readFileSync(cocaFile, "utf8")));
  if (!result.success) {
    throw new Error(
      `content/coca.yaml non valido:\n${result.error.issues.map((i) => `- ${i.path.join(".")}: ${i.message}`).join("\n")}`,
    );
  }

  const members = result.data.unita.flatMap((unita) =>
    unita.capi.map((capo) => {
      const id = capo.id ?? `${slugify(capo.cognome)}-${slugify(capo.nome)}`;
      // Use local image if it exists, otherwise fallback to DiceBear API
      const imageExists = existsSync(join(process.cwd(), "public", "images", "coca", `${id}.jpg`));
      return {
        id,
        nome: capo.nome,
        cognome: capo.cognome,
        ruolo: capo.ruolo,
        unita: unita.nome,
        branca: unita.branca,
        imageSrc: imageExists ? `/images/coca/${id}.jpg` : `https://api.dicebear.com/9.x/thumbs/svg?seed=${id}`,
      };
    }),
  );

  const duplicate = members.find((member, i) => members.findIndex((other) => other.id === member.id) !== i);
  if (duplicate) {
    throw new Error(
      `content/coca.yaml: "${duplicate.id}" compare due volte, aggiungi un id per distinguere gli omonimi`,
    );
  }

  return members;
}
