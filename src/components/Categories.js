'use client';

import Link from 'next/link';

const categories = [
  { name: 'Fruits', emoji: '🍎', color: '#fee2e2' },
  { name: 'Vegetables', emoji: '🥦', color: '#dcfce7' },
  { name: 'Dairy & Eggs', emoji: '🥛', color: '#e0f2fe' },
  { name: 'Bakery', emoji: '🍞', color: '#fef3c7' },
];

export default function Categories() {
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Categories</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '0.5rem', color: 'var(--text-main)' }}>Shop by Category</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem' 
        }}>
          {categories.map((cat, index) => (
            <Link href={`/products?category=${cat.name}`} key={cat.name} className="animate-slide-up" style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid transparent',
              animationDelay: `${index * 100}ms`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            >
                <div style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '1.5rem', 
                  backgroundColor: cat.color,
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>{cat.emoji}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
