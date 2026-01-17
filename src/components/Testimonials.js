export default function Testimonials() {
  const reviews = [
    { name: 'Sarah Johnson', role: 'Verified Buyer', rating: 5, text: 'The freshest vegetables I have ever tasted! Delivery was super fast too. Highly recommended for busy moms.' },
    { name: 'Mike Thompson', role: 'Chef', rating: 5, text: 'As a chef, quality is everything. FreshGrocer never disappoints with their organic selection.' },
    { name: 'Emily Rogers', role: 'Fitness Enthusiast', rating: 5, text: 'Great service and amazing quality. The fruit selection is incredible and always ripe.' },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="card bg-base-100 border border-base-200 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="card-body relative">
                <div className="absolute top-4 left-6 text-6xl text-primary/10 serif leading-none">"</div>
                <div className="rating rating-sm mb-4 z-10">
                  {[...Array(review.rating)].map((_, r) => (
                    <input key={r} type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" disabled checked />
                  ))}
                </div>
                <p className="text-base-content/70 italic mb-6 z-10 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span className="text-xl font-bold">{review.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                     <h4 className="font-bold text-base-content">{review.name}</h4>
                     <div className="text-sm text-base-content/60">{review.role}</div>
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
