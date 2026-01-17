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
    <section style={{ padding: '6rem 0', backgroundColor: '#fafafa' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
          <div>
             <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Trending</span>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', color: 'var(--text-main)' }}>Popular this Week</h2>
          </div>
          <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View All <span style={{ fontSize: '1.2rem' }}>&rarr;</span>
          </Link>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {products.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{ 
              backgroundColor: 'white', 
              borderRadius: '1.5rem', 
              padding: '1.5rem',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              border: '1px solid var(--border)',
              transition: 'all 0.3s ease',
              animationDelay: `${index * 100}ms`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
             onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            >
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '1.5rem', 
                background: '#f9fafb', 
                borderRadius: '1rem', 
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="product-emoji" style={{ transition: 'transform 0.3s' }}>{product.image}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>{product.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.5rem' }}>${product.price}</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
