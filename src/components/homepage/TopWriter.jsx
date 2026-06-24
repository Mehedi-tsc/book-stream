import Image from 'next/image';
import React from 'react';

// Static data placeholder - easy to replace with a DB query or API call later
const TOP_WRITERS_DATA = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    sales: 1420,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Alex Rivera',
    sales: 1280,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Emma Watson',
    sales: 1150,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
  },
];

export default function TopWriters() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl  px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Top Writers
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Our creators with the highest sales this month.
          </p>
        </div>

        {/* Writers List Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {TOP_WRITERS_DATA.map((writer, index) => (
            <div
              key={writer.id}
              className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              {/* Rank Badge */}
              <span className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                #{index + 1}
              </span>

              {/* Avatar */}
              <div className="relative w-20 h-20 mb-4">
                <Image
                  className="rounded-full object-cover w-full h-full border-2 border-indigo-500 p-0.5"
                  src={writer.avatar}
                  alt={`${writer.name}'s avatar`}
                  height={40}
                  width={40}
                />
              </div>

              {/* Writer Details */}
              <h3 className="font-semibold text-gray-950 dark:text-white text-lg line-clamp-1">
                {writer.name}
              </h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                {writer.sales.toLocaleString()} sales
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}