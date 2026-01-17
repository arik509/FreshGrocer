export default function Benefits() {
  const benefits = [
    { title: 'Free Delivery', icon: '🚚', desc: 'On all orders over $50' },
    { title: 'Organic Certified', icon: '🌿', desc: '100% certified organic products' },
    { title: 'Quality Guarantee', icon: '✅', desc: 'Not happy? We will refund you' },
    { title: 'Eco-Friendly', icon: '🌍', desc: 'Sustainable packaging' },
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {benefits.map((b) => (
            <div key={b.title}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{b.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{b.title}</h3>
              <p style={{ opacity: 0.9 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
