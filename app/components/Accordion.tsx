'use client';

import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="w-full py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-4 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-${question}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0">
            <svg
              className={`w-6 h-6 text-blue-600 dark:text-blue-400 transform transition-transform duration-200 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      
      <div
        id={`accordion-${question}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pb-6 px-2">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
  subtitle?: string;
}

export default function Accordion({ items, title, subtitle }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
