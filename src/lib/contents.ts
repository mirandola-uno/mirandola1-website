import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { Content, ContentMeta } from "./types";

export type ContentType = "pages" | "posts";

const contentsDirectory = path.join(process.cwd(), "content");

// Get all posts metadata
export function getAllContents(type: ContentType): ContentMeta[] {
  const fileNames = fs.readdirSync(path.join(contentsDirectory, type));

  return fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(contentsDirectory, type, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        highlight: matterResult.data.highlight as boolean,
        excerpt: matterResult.data.excerpt as string,
      };
    })
    .sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
}

// Get one post by ID
export async function getContentData(type: ContentType, id: string): Promise<Content> {
  const fullPath = path.join(contentsDirectory, type, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    highlight: matterResult.data.highlight as boolean,
    excerpt: matterResult.data.excerpt as string,
    contentHtml,
  };
}
