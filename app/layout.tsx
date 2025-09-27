import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Allen 赵航 - 爱昕昕老婆的 AI 全栈开发',
  description: '专注于 AI 和全栈开发的技术博客和项目展示',
  keywords: ['大数据', 'AI', '全栈开发', 'Next.js', 'Python', '机器学习'],
  authors: [{ name: 'Allen 赵航' }],
  openGraph: {
    title: 'Allen 赵航 - 爱昕昕老婆的 AI 全栈开发',
    description: '专注于 AI 和全栈开发的技术博客和项目展示',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}