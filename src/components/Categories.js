'use client';

import Link from 'next/link';

const categories = [
  { name: 'Fruits', emoji: '🍎', color: 'from-red-50 to-red-100', border: 'hover:border-red-300' },
  { name: 'Vegetables', emoji: '🥦', color: 'from-green-50 to-green-100', border: 'hover:border-green-300' },
  { name: 'Dairy & Eggs', emoji: '🥛', color: 'from-blue-50 to-blue-100', border: 'hover:border-blue-300' },
  { name: 'Bakery', emoji: '🍞', color: 'from-yellow-50 to-yellow-100', border: 'hover:border-yellow-300' },
];

export default function Categories() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="badge badge-primary badge-lg">Categories</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-base-content">Shop by Category</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Explore our wide range of fresh, organic products
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link 
              href={`/products?category=${cat.name}`} 
              key={cat.name} 
              className={`group card bg-gradient-to-br ${cat.color} border-2 border-transparent ${cat.border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block overflow-hidden relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="card-body items-center text-center p-8 relative z-10">
                <div className="text-7xl mb-4 group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg">
                  {cat.emoji}
                </div>
                <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <div className="badge badge-ghost badge-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
