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
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-base-content">All Products</h1>
         {/* Link to hidden add-product page for demo */}
         <Link href="/add-product" className="btn btn-accent btn-sm sm:btn-md">
            Add Product
         </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
