export default function Newsletter() {
  return (
    <section style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ 
          backgroundColor: '#064e3b', 
          borderRadius: '2rem', 
          padding: '4rem 2rem', 
          backgroundImage: 'radial-gradient(circle at top right, #047857, #064e3b)',
          color: 'white',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Join Our Newsletter</h2>
          <p style={{ marginBottom: '2.5rem', opacity: 0.9, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Get weekly updates on fresh arrivals, exclusive recipes, and 15% off your first order.</p>
          
          <form style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{ 
                flex: 1,
                padding: '1rem 1.5rem', 
                borderRadius: '9999px', 
                border: 'none', 
                outline: 'none',
                minWidth: '250px'
              }}
              required
            />
            <button type="submit" className="btn btn-accent" style={{ padding: '1rem 2rem' }}>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
