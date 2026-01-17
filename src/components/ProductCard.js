import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div style={{ 
      border: '1px solid var(--border)', 
      borderRadius: '0.75rem', 
      overflow: 'hidden',
      backgroundColor: 'white',
      transition: 'transform 0.2s',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
        {/* Simple placeholder if image is just text/emoji or show actual image */}
        {product.image.includes('http') && !product.image.includes('placehold') ? (
           <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
           <span>📦</span> 
        )}
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{product.category}</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>{product.name}</h3>
        <p style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '1rem' }}>${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="btn btn-primary" style={{ textAlign: 'center', marginTop: 'auto' }}>
          View Details
        </Link>
      </div>
    </div>
  );
}
