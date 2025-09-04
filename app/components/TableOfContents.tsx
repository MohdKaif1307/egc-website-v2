'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({
  containerSelector = '.blog-content',
}: {
  containerSelector?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLHeadingElement>('h2, h3')
    );

    const slugify = (text: string) =>
      text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    const toc: TocItem[] = headings.map((h) => {
      let id = h.id;
      if (!id) {
        id = slugify(h.textContent || 'section');
        // Ensure uniqueness
        let uniqueId = id;
        let suffix = 1;
        while (document.getElementById(uniqueId)) {
          uniqueId = `${id}-${suffix++}`;
        }
        id = uniqueId;
        h.id = id;
      }
      const level = h.tagName.toLowerCase() === 'h2' ? 2 : 3;
      return { id, text: h.textContent || '', level };
    });

    setItems(toc);
  }, [containerSelector]);

  if (items.length === 0) return null;

  return (
    <nav className="mb-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">On this page</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${item.id}`}
              className="text-blue-700 dark:text-blue-300 hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


