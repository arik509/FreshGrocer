'use client';

import Link from 'next/link';

const categories = [
  { name: 'Fruits', emoji: '🍎', color: 'bg-red-50 hover:border-red-200' },
  { name: 'Vegetables', emoji: '🥦', color: 'bg-green-50 hover:border-green-200' },
  { name: 'Dairy & Eggs', emoji: '🥛', color: 'bg-blue-50 hover:border-blue-200' },
  { name: 'Bakery', emoji: '🍞', color: 'bg-yellow-50 hover:border-yellow-200' },
];

export default function Categories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Categories</span>
          <h2 className="text-4xl font-extrabold mt-2 text-base-content">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link href={`/products?category=${cat.name}`} key={cat.name} 
              className={`card ${cat.color} border border-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block`}
            >
              <div className="card-body items-center text-center p-8">
                <div className="text-6xl mb-4 p-4 bg-white/50 rounded-full w-24 h-24 flex items-center justify-center">
                  {cat.emoji}
                </div>
                <h3 className="card-title text-xl font-bold">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
