import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { Post, PostMeta } from "../types";

const contentsDirectory = path.join(process.cwd(), "content", "posts");

export function getPostMeta(fullPath: string): PostMeta {
  const id = path.basename(fullPath).replace(/\.md$/, "");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // extract the date if exists from the id, is in format YYYY-MM-DD-title.md
  const y = Number(id.split("-")[0]);
  const m = Number(id.split("-")[1]);
  const d = Number(id.split("-")[2]);
  const date = new Date(y, m - 1, d);
  const isValidDate = !isNaN(date.getTime());

  return {
    id,
    title: matterResult.data.title as string,
    date: isValidDate ? date : undefined,
    highlight: matterResult.data.highlight as boolean,
    excerpt: matterResult.data.excerpt as string,
  };
}

// Get all posts metadata
export function getAllPostsMeta(): PostMeta[] {
  const fileNames = fs.readdirSync(contentsDirectory);

  return fileNames
    .map((fileName) => {
      return getPostMeta(path.join(contentsDirectory, fileName));
    })
    .sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
}

// Get one post by ID
export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(contentsDirectory, `${id}.md`);

  const meta = getPostMeta(fullPath);

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
