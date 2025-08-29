import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { Page, PageMeta } from "../types";

const contentsDirectory = path.join(process.cwd(), "content", "pages");

export function getPageMeta(fullPath: string): PageMeta {
  const id = path.basename(fullPath).replace(/\.md$/, "");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title as string,
  };
}

// Get all posts metadata
export function getAllPagesMeta(): PageMeta[] {
  const fileNames = fs.readdirSync(contentsDirectory);

  return fileNames
    .map((fileName) => {
      return getPageMeta(path.join(contentsDirectory, fileName));
    })
    .sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
}

// Get one post by ID
export async function getPageData(id: string): Promise<Page> {
  const fullPath = path.join(contentsDirectory, `${id}.md`);

  const meta = getPageMeta(fullPath);

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
    contentHtml,
    ...meta,
  };
}
