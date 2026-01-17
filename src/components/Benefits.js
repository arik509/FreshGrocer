export default function Benefits() {
  const benefits = [
    { 
      title: 'Free Delivery', 
      icon: '🚚', 
      desc: 'On all orders over $50',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Organic Certified', 
      icon: '🌿', 
      desc: '100% certified organic products',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Quality Guarantee', 
      icon: '✅', 
      desc: 'Not happy? We will refund you',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Eco-Friendly', 
      icon: '🌍', 
      desc: 'Sustainable packaging',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary-focus text-primary-content relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Why Choose FreshGrocer?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're committed to providing the best experience for our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, index) => (
            <div 
              key={b.title} 
              className="group hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="card-body items-center text-center p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                  <p className="opacity-90 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
