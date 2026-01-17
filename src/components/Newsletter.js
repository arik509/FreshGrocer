export default function Newsletter() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#fff7ed', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>Join Our Newsletter</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Gt weekly updates on fresh arrivals and exclusive recipes.</p>
        <form style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={{ 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem', 
              border: '1px solid var(--border)', 
              width: '300px',
              maxWidth: '100%'
            }}
            required
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
