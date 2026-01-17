export default function Benefits() {
  const benefits = [
    { title: 'Free Delivery', icon: '🚚', desc: 'On all orders over $50' },
    { title: 'Organic Certified', icon: '🌿', desc: '100% certified organic products' },
    { title: 'Quality Guarantee', icon: '✅', desc: 'Not happy? We will refund you' },
    { title: 'Eco-Friendly', icon: '🌍', desc: 'Sustainable packaging' },
  ];

  return (
    <section className="py-24 bg-primary text-primary-content relative overflow-hidden">
      {/* Abstract Pattern background check */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {benefits.map((b, index) => (
            <div key={b.title} className="hover:-translate-y-1 transition-transform duration-300">
              <div className="text-6xl mb-6 bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm shadow-xl">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="opacity-90 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
