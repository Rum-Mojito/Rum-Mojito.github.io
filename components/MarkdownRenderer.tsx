'use client';

import { useEffect, useRef } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const processMarkdown = async () => {
      if (contentRef.current) {
        const processedContent = await remark()
          .use(html)
          .process(content);
        
        contentRef.current.innerHTML = processedContent.toString();
      }
    };

    processMarkdown();
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
    />
  );
}
