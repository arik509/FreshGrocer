export default function Testimonials() {
  const reviews = [
    { 
      name: 'Sarah Johnson', 
      role: 'Verified Buyer', 
      rating: 5, 
      text: 'The freshest vegetables I have ever tasted! Delivery was super fast too. Highly recommended for busy moms.',
      avatar: 'SJ',
      color: 'bg-pink-500'
    },
    { 
      name: 'Mike Thompson', 
      role: 'Chef', 
      rating: 5, 
      text: 'As a chef, quality is everything. FreshGrocer never disappoints with their organic selection.',
      avatar: 'MT',
      color: 'bg-blue-500'
    },
    { 
      name: 'Emily Rogers', 
      role: 'Fitness Enthusiast', 
      rating: 5, 
      text: 'Great service and amazing quality. The fruit selection is incredible and always ripe.',
      avatar: 'ER',
      color: 'bg-purple-500'
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="badge badge-primary badge-lg">Testimonials</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">What Our Customers Say</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Join thousands of happy customers who trust FreshGrocer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="card bg-base-100 border-2 border-base-200 hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="card-body relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute -top-4 -left-4 text-9xl text-primary/5 font-serif leading-none">"</div>
                
                {/* Rating */}
                <div className="rating rating-sm mb-4 z-10">
                  {[...Array(review.rating)].map((_, r) => (
                    <input 
                      key={r} 
                      type="radio" 
                      name={`rating-${i}`} 
                      className="mask mask-star-2 bg-warning" 
                      disabled 
                      checked 
                    />
                  ))}
                </div>
                
                {/* Review text */}
                <p className="text-base-content/80 italic mb-6 z-10 leading-relaxed text-lg">
                  "{review.text}"
                </p>
                
                {/* Reviewer info */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-base-200">
                  <div className={`avatar placeholder`}>
                    <div className={`${review.color} text-white rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:scale-110 transition-transform`}>
                      <span className="text-xl font-bold">{review.avatar}</span>
                    </div>
                  </div>
                  <div>
                     <h4 className="font-bold text-base-content text-lg">{review.name}</h4>
                     <div className="text-sm text-base-content/60 flex items-center gap-1">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                       {review.role}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
