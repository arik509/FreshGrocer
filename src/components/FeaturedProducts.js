import Link from 'next/link';

const products = [
  { id: 1, name: 'Organic Bananas', price: '2.99', image: '🍌' },
  { id: 2, name: 'Fresh Avocados', price: '4.99', image: '🥑' },
  { id: 3, name: 'Sourdough Bread', price: '5.49', image: '🍞' },
  { id: 4, name: 'Whole Milk', price: '3.99', image: '🥛' },
];

export default function FeaturedProducts() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fafafa' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>Popular this Week</h2>
          <Link href="/products" style={{ color: 'var(--primary)', fontWeight: 600 }}>View All &rarr;</Link>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2rem' 
        }}>
          {products.map((product) => (
            <div key={product.id} style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.75rem', 
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem', background: '#f3f4f6', borderRadius: '0.5rem', padding: '1rem' }}>
                {product.image}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{product.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>${product.price}</p>
              <button className="btn btn-primary" style={{ width: '100%', padding: '0.5rem' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
