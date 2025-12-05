import { existsSync } from "fs";
import { join } from "path";
import Image from "next/image";

export const CoCaProfileImage = ({ id }: { id: string }) => {
  // Check if the image exists in the public directory
  const publicImagePath = join(process.cwd(), "public", "images", "coca", `${id}.jpg`);
  const imageExists = existsSync(publicImagePath);

  // Use local image if it exists, otherwise fallback to DiceBear API
  const imageSrc = imageExists ? `/images/coca/${id}.jpg` : `https://api.dicebear.com/9.x/thumbs/svg?seed=${id}`;

  return <Image src={imageSrc} alt={id} className="rounded-2xl size-32 object-cover" width={100} height={100} />;
};
