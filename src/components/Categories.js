import Link from 'next/link';

const categories = [
  { name: 'Fruits', emoji: '🍎', color: '#fee2e2' },
  { name: 'Vegetables', emoji: '🥦', color: '#dcfce7' },
  { name: 'Dairy & Eggs', emoji: '🥛', color: '#e0f2fe' },
  { name: 'Bakery', emoji: '🍞', color: '#fef3c7' },
];

export default function Categories() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center', color: 'var(--text-main)' }}>Shop by Category</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {categories.map((cat) => (
            <Link href={`/products?category=${cat.name}`} key={cat.name} style={{
              backgroundColor: cat.color,
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              display: 'block'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{cat.emoji}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
