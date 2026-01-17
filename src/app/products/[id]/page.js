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
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const imageEmoji = product.image.replace(/https.*text=/, '').replace(/[^\w\s]/gi, '') || '📦';
  const hasImage = product.image.includes('http') && !product.image.includes('placehold');

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/products" className="btn btn-ghost btn-sm mb-8 gap-2">
        &larr; Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="bg-base-200 rounded-3xl min-h-[400px] flex items-center justify-center text-9xl overflow-hidden shadow-inner">
           {hasImage ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
           ) : (
              <span>{imageEmoji}</span>
           )}
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="badge badge-primary badge-lg mb-4">{product.category}</div>
          <h1 className="text-5xl font-bold mb-4 text-base-content">{product.name}</h1>
          <p className="text-4xl font-bold text-primary mb-8">${product.price ? product.price.toFixed(2) : '0.00'}</p>
          
          <p className="text-lg leading-relaxed text-base-content/80 mb-8">
            {product.description}
          </p>
          
          <div className="bg-base-200 p-6 rounded-2xl mb-8">
            <h3 className="font-bold mb-2">Nutritional Facts</h3>
            <p className="text-base-content/70">{product.nutrition}</p>
          </div>

          <button className="btn btn-primary btn-lg w-full md:w-auto shadow-xl shadow-primary/20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
