import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';

async function getProduct(id) {
  const jsonDirectory = path.join(process.cwd(), 'src', 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  const products = JSON.parse(fileContents);
  return products.find(p => p.id === id);
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params; // Await params in Next.js 15
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem' }}>Product Not Found</h1>
        <Link href="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <Link href="/products" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-muted)' }}>
        &larr; Back to Products
      </Link>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div style={{ backgroundColor: '#f3f4f6', borderRadius: '1rem', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
           {product.image.includes('http') && !product.image.includes('placehold') ? (
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
           ) : (
              <span>📦</span>
           )}
        </div>
        
        <div>
          <span style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'white', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '1rem', 
            fontSize: '0.875rem',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            {product.category}
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>{product.name}</h1>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem' }}>${product.price ? product.price.toFixed(2) : '0.00'}</p>
          
          <p style={{ lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {product.description}
          </p>
          
          <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Nutritional Facts</h3>
            <p style={{ color: 'var(--text-muted)' }}>{product.nutrition}</p>
          </div>

          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
