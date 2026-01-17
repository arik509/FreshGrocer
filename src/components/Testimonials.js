export default function Testimonials() {
  const reviews = [
    { name: 'Sarah J.', rating: '⭐⭐⭐⭐⭐', text: 'The freshest vegetables I have ever tasted! Delivery was super fast too.' },
    { name: 'Mike T.', rating: '⭐⭐⭐⭐⭐', text: 'Love the variety of organic fruits. My kids actually eat them now!' },
    { name: 'Emily R.', rating: '⭐⭐⭐⭐⭐', text: 'Great service and amazing quality. Highly recommend FreshGrocer.' },
  ];

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: 'var(--text-main)' }}>What Our Customers Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, i) => (
            <div key={i} style={{ 
              padding: '2rem', 
              border: '1px solid var(--border)', 
              borderRadius: '1rem',
              backgroundColor: 'white'
            }}>
              <div style={{ marginBottom: '1rem' }}>{review.rating}</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"{review.text}"</p>
              <h4 style={{ fontWeight: 600 }}>{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
