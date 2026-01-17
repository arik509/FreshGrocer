'use client';

import Link from 'next/link';

const products = [
  { id: 1, name: 'Organic Bananas', price: '2.99', image: '🍌', tag: 'Popular' },
  { id: 2, name: 'Fresh Avocados', price: '4.99', image: '🥑', tag: 'New' },
  { id: 3, name: 'Sourdough Bread', price: '5.49', image: '🍞', tag: 'Hot' },
  { id: 4, name: 'Whole Milk', price: '3.99', image: '🥛', tag: 'Sale' },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center sm:text-left">
             <div className="badge badge-accent badge-lg mb-2">Trending</div>
             <h2 className="text-4xl sm:text-5xl font-extrabold text-base-content">Popular this Week</h2>
             <p className="text-base-content/70 mt-2">Handpicked favorites from our customers</p>
          </div>
          <Link href="/products" className="btn btn-primary btn-outline gap-2 group hover:scale-105 transition-all">
            View All 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl border border-base-200 hover:-translate-y-3 transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`badge ${
                  product.tag === 'Popular' ? 'badge-primary' :
                  product.tag === 'New' ? 'badge-success' :
                  product.tag === 'Hot' ? 'badge-error' :
                  'badge-warning'
                } gap-2 shadow-lg`}>
                  {product.tag === 'Hot' && '🔥'}
                  {product.tag === 'New' && '✨'}
                  {product.tag}
                </div>
              </div>

              <figure className="px-10 pt-10 bg-gradient-to-br from-base-200 to-base-100 h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <span className="text-8xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer relative z-10 filter drop-shadow-lg">
                  {product.image}
                </span>
              </figure>
              
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-3xl font-bold text-primary">${product.price}</p>
                <div className="card-actions w-full mt-4">
                  <button className="btn btn-primary w-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group/btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
