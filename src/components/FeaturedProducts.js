'use client';

import Link from 'next/link';

const products = [
  { id: 1, name: 'Organic Bananas', price: '2.99', image: '🍌' },
  { id: 2, name: 'Fresh Avocados', price: '4.99', image: '🥑' },
  { id: 3, name: 'Sourdough Bread', price: '5.49', image: '🍞' },
  { id: 4, name: 'Whole Milk', price: '3.99', image: '🥛' },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
             <span className="text-primary font-bold tracking-widest uppercase text-sm">Trending</span>
             <h2 className="text-4xl font-extrabold mt-2 text-base-content">Popular this Week</h2>
          </div>
          <Link href="/products" className="btn btn-primary btn-outline gap-2 group">
            View All <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="card bg-base-100 shadow-xl border border-base-200 hover:-translate-y-2 transition-transform duration-300">
              <figure className="px-10 pt-10 text-8xl bg-base-200/50 h-48 flex items-center justify-center">
                <span className="hover:scale-125 transition-transform duration-300 cursor-pointer">{product.image}</span>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">{product.name}</h3>
                <p className="text-2xl font-bold text-primary">${product.price}</p>
                <div className="card-actions w-full mt-4">
                  <button className="btn btn-primary w-full shadow-lg shadow-primary/30">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
