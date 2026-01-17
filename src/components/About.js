export default function About() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>From Our Farm to Your Table</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--text-muted)' }}>
            We believe that fresher is better. That's why we partner directly with local farmers and artisans to bring you produce that was picked at peak ripeness. No long storage times, no artificial preservatives.
          </p>
          <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
            Every item in our store is hand-selected to ensure the highest quality for your family. Sustainable farming, fair prices for producers, and healthy food for you.
          </p>
        </div>
        <div style={{ backgroundColor: '#e2e8f0', height: '300px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '4rem' }}>🚜</span>
        </div>
      </div>
    </section>
  );
}
