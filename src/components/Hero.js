import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      padding: '8rem 0 6rem', 
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <span className="animate-slide-up" style={{ 
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            borderRadius: '2rem',
            fontWeight: 700,
            fontSize: '0.875rem',
            marginBottom: '1.5rem'
          }}>
            🌿 100% Organic & Fresh
          </span>
          
          <h1 className="animate-slide-up delay-100" style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            fontWeight: 800, 
            color: 'var(--text-main)', 
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            Eat Fresh, <br />
            <span style={{ 
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Live Healthy</span>
          </h1>
          
          <p className="animate-slide-up delay-200" style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            maxWidth: '540px', 
            marginBottom: '2.5rem',
            lineHeight: 1.6
          }}>
            Get organic, farm-fresh produce delivered straight to your door. We partner with local farmers to bring you the best quality ingredients within 24 hours of harvest.
          </p>
          
          <div className="animate-slide-up delay-300" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="/about" className="btn" style={{ 
              backgroundColor: 'white', 
              border: '1px solid var(--border)',
              color: 'var(--text-main)'
            }}>
              Learn More
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-200" style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
           <div style={{
             position: 'relative',
             animation: 'float 6s ease-in-out infinite'
           }}>
              <div style={{
                fontSize: '15rem',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
              }}>
                🥗
              </div>
              
              {/* Floating badges */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                background: 'white',
                padding: '1rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'float 5s ease-in-out infinite reverse'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🚚</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Free Delivery</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>On orders over $50</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
