import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>FreshGrocer</h3>
          <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
            Farm fresh products delivered directly to your doorstep. Quality you can trust.
          </p>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/" style={{ color: '#d1d5db' }}>Home</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/products" style={{ color: '#d1d5db' }}>Products</Link></li>
            <li><Link href="/about" style={{ color: '#d1d5db' }}>About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Contact</h4>
          <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>123 Market Street</p>
          <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>support@freshgrocer.com</p>
          <p style={{ color: '#9ca3af' }}>+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#6b7280' }}>
        &copy; {new Date().getFullYear()} FreshGrocer. All rights reserved.
      </div>
    </footer>
  );
}
