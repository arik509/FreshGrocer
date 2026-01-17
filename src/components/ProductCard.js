'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  const imageEmoji = product.image.replace(/https.*text=/, '').replace(/[^\w\s]/gi, '') || '📦';
  const hasImage = product.image.includes('http') && !product.image.includes('placehold');

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-200">
      <figure className="h-48 bg-base-200 flex items-center justify-center text-6xl overflow-hidden relative group">
        {hasImage ? (
           <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
           <span className="group-hover:scale-110 transition-transform duration-300">{imageEmoji}</span> 
        )}
        <button className="btn btn-circle btn-primary absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
        </button>
      </figure>
      <div className="card-body p-6">
        <div className="badge badge-outline text-xs font-bold uppercase tracking-wider mb-2">{product.category}</div>
        <h2 className="card-title text-xl mb-1">{product.name}</h2>
        <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/products/${product.id}`} className="btn btn-primary btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
