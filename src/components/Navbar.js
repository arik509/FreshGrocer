import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: 'white', 
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '70px' 
      }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          FreshGrocer
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Home</Link>
          <Link href="/products" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Products</Link>
          <Link href="/login" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Login</Link>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span role="img" aria-label="cart" style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
