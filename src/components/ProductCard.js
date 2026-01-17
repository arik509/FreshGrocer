'use client';

import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="animate-slide-up" style={{ 
      borderRadius: '1.5rem', 
      overflow: 'hidden',
      backgroundColor: 'white',
      transition: 'all 0.4s ease',
      border: '1px solid var(--border)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{ 
        position: 'relative',
        height: '240px', 
        backgroundColor: '#f9fafb', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '4rem',
        overflow: 'hidden'
      }}>
        {product.image.includes('http') && !product.image.includes('placehold') ? (
           <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
           <span style={{ transition: 'transform 0.5s' }} className="product-emoji">{product.image.replace(/https.*text=/, '').replace(/[^\w\s]/gi, '') || '📦'}</span> 
        )}
        
        <button style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          backgroundColor: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          boxShadow: 'var(--shadow-md)',
          cursor: 'pointer',
          color: 'var(--primary)',
          fontSize: '1.25rem'
        }}>
          +
        </button>
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {product.category}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>{product.name}</h3>
        <p style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>${product.price.toFixed(2)}</p>
        
        <Link href={`/products/${product.id}`} className="btn btn-primary" style={{ textAlign: 'center', marginTop: 'auto', width: '100%' }}>
          View Details
        </Link>
      </div>
    </div>
  );
}
