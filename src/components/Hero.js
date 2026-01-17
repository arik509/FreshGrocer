import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100 min-h-[85vh] flex items-center">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Image/Emoji Section */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <div className="text-[12rem] sm:text-[15rem] animate-float filter drop-shadow-2xl">
                🥗
              </div>
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 animate-slide-up">
                <div className="badge badge-success gap-2 p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Fresh Daily
                </div>
              </div>
              <div className="absolute bottom-10 -right-4 animate-slide-up delay-200">
                <div className="badge badge-warning gap-2 p-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  24h Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block animate-slide-up">
              <div className="badge badge-lg badge-primary gap-2 shadow-lg">
                <span className="text-lg">🌿</span>
                100% Organic Certified
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight animate-slide-up delay-100">
              Eat Fresh, <br/>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Live Healthy
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-base-content/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-200">
              Get organic, farm-fresh produce delivered straight to your door. We partner with local farmers to bring you the best quality ingredients within 24 hours of harvest.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up delay-300">
              <Link href="/products" className="btn btn-primary btn-lg rounded-full px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/about" className="btn btn-outline btn-lg rounded-full px-10 hover:bg-primary hover:border-primary hover:scale-105 transition-all duration-300">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical sm:stats-horizontal shadow-lg bg-base-100/50 backdrop-blur-sm animate-slide-up delay-400">
              <div className="stat place-items-center">
                <div className="stat-title">Happy Customers</div>
                <div className="stat-value text-primary">10K+</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Products</div>
                <div className="stat-value text-accent">500+</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Farmers</div>
                <div className="stat-value text-success">50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
