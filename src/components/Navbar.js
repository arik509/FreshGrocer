'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass" style={{ 
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '80px' 
      }}>
        <Link href="/" style={{ 
          fontSize: '1.75rem', 
          fontWeight: 800, 
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ color: 'var(--primary)' }}>Fresh</span>Grocer
        </Link>
        
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <Link href="/" className="hover-text" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Home</Link>
          <Link href="/products" className="hover-text" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Products</Link>
          <Link href="/login" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>Login</Link>
          
          <div style={{ 
            position: 'relative', 
            cursor: 'pointer', 
            width: '40px', 
            height: '40px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'var(--primary-light)',
            borderRadius: '50%',
            color: 'var(--primary)',
            transition: 'transform 0.2s'
          }} className="btn-icon">
            <span role="img" aria-label="cart" style={{ fontSize: '1.2rem' }}>🛒</span>
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              border: '2px solid white'
            }}>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
