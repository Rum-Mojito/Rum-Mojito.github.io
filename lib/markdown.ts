import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  tech: string[];
  github: string;
  summary: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  const fileNames = fs.readdirSync(blogDirectory);
  
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        summary: data.summary,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPostsData;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      summary: data.summary,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        tech: data.tech || [],
        github: data.github,
        summary: data.summary,
        content,
      };
    });

  return allProjectsData;
}

export function getProject(slug: string): Project | null {
  try {
    const fullPath = path.join(contentDirectory, 'projects', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      tech: data.tech || [],
      github: data.github,
      summary: data.summary,
      content,
    };
  } catch (error) {
    return null;
  }
}
