import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import path from 'path';
import { promises as fs } from 'fs';

// Helper to get data directly in Server Component
async function getProducts() {
  // In a real scenario with separate backend, we would fetch(API_URL)
  // For this self-contained demo, reading file directly is safer for build time
  const jsonDirectory = path.join(process.cwd(), 'src', 'data');
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8');
  return JSON.parse(fileContents);
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-main)' }}>All Products</h1>
         {/* Link to hidden add-product page for demo */}
         <Link href="/add-product" className="btn btn-accent">
            Add Product
         </Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
