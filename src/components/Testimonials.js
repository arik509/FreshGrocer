export default function Testimonials() {
  const reviews = [
    { name: 'Sarah Johnson', role: 'Verified Buyer', rating: 5, text: 'The freshest vegetables I have ever tasted! Delivery was super fast too. Highly recommended for busy moms.' },
    { name: 'Mike Thompson', role: 'Chef', rating: 5, text: 'As a chef, quality is everything. FreshGrocer never disappoints with their organic selection.' },
    { name: 'Emily Rogers', role: 'Fitness Enthusiast', rating: 5, text: 'Great service and amazing quality. The fruit selection is incredible and always ripe.' },
  ];

  return (
    <section style={{ padding: '8rem 0 6rem', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center', color: 'var(--text-main)' }}>What Our Customers Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {reviews.map((review, i) => (
            <div key={i} className="animate-slide-up" style={{ 
              padding: '2.5rem', 
              border: '1px solid var(--border)', 
              borderRadius: '1.5rem',
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-sm)',
              animationDelay: `${i * 150}ms`,
              position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: '-1.5rem', left: '2rem', fontSize: '3rem', color: 'var(--primary)', opacity: 0.3, fontFamily: 'serif' }}>"</div>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(review.rating)].map((_, r) => (
                  <span key={r} style={{ color: '#fbbf24' }}>⭐</span>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.1rem' }}>"{review.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', backgroundColor: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--text-muted)' }}>
                    {review.name.charAt(0)}
                </div>
                <div>
                   <h4 style={{ fontWeight: 700, color: 'var(--text-main)' }}>{review.name}</h4>
                   <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
