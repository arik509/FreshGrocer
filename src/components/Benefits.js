export default function Benefits() {
  const benefits = [
    { title: 'Free Delivery', icon: '🚚', desc: 'On all orders over $50' },
    { title: 'Organic Certified', icon: '🌿', desc: '100% certified organic products' },
    { title: 'Quality Guarantee', icon: '✅', desc: 'Not happy? We will refund you' },
    { title: 'Eco-Friendly', icon: '🌍', desc: 'Sustainable packaging' },
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4rem', textAlign: 'center' }}>
          {benefits.map((b, index) => (
            <div key={b.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div style={{ 
                fontSize: '3.5rem', 
                marginBottom: '1.5rem', 
                background: 'rgba(255,255,255,0.2)', 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                backdropFilter: 'blur(5px)'
              }}>{b.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.75rem' }}>{b.title}</h3>
              <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
