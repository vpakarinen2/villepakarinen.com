import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id,
      ...(data as { title: string; date: string; description: string }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX Error: File not found at ${fullPath}. Did you name it ${id}.md?`);
  }

  return {
    id,
    content, // The actual markdown text
    ...(data as { title: string; date: string; description: string; author?: string }),
  };
}
