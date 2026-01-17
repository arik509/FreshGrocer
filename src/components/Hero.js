import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ 
      backgroundColor: 'var(--background)', 
      padding: '4rem 0', 
      textAlign: 'center',
      diplay: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 800, 
          color: 'var(--primary)', 
          marginBottom: '1rem',
          lineHeight: 1.1
        }}>
          Eat Fresh, <span style={{ color: 'var(--accent)' }}>Live Healthy</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          lineHeight: 1.6
        }}>
          Get organic, farm-fresh produce delivered straight to your door. We partner with local farmers to bring you the best quality ingredients.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/products" className="btn btn-primary">
            Shop Now
          </Link>
          <Link href="/about" className="btn" style={{ border: '2px solid var(--border)', backgroundColor: 'transparent' }}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
