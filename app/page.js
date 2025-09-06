'use client';
import { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [q, setQ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    console.log('submit:', q);
  };

  return (
    <main className={`${inter.className} min-h-screen w-full flex flex-col items-center pt-16 px-4`}>
      {/* cxray header */}
      <h2 className="text-lg text-gray-500 mb-10">cxray</h2>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-normal text-gray-900 mb-12 text-center">
        What can I help you with today?
      </h1>

      {/* Search bar */}
      <form onSubmit={onSubmit} className="w-full max-w-3xl">
        <div className="flex items-center w-full rounded-full border border-gray-200 bg-white shadow-sm px-6 py-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask anything"
            className="flex-1 bg-transparent outline-none text-[17px] placeholder:text-gray-400"
          />
        </div>
      </form>
    </main>
  );
}
