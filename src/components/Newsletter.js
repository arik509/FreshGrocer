export default function Newsletter() {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto px-4">
        <div className="card bg-neutral text-neutral-content shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="card-body p-12 lg:p-16 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <h2 className="text-4xl font-extrabold mb-4 relative z-10">Join Our Newsletter</h2>
            <p className="mb-8 text-lg opacity-90 max-w-xl mx-auto relative z-10">Get weekly updates on fresh arrivals, exclusive recipes, and 15% off your first order.</p>
            
            <form className="join max-w-lg mx-auto w-full relative z-10 shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="input input-bordered join-item w-full text-base-content focus:outline-none"
                required
              />
              <button type="submit" className="btn btn-primary join-item px-8">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
