export default function About() {
  return (
    <section className="hero py-24 bg-base-100">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div className="bg-base-200 rounded-3xl p-16 rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl">
          <span className="text-9xl grayscale hover:grayscale-0 transition-all duration-500 block hover:scale-110">🚜</span>
        </div>
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold mb-6 text-base-content">From Our Farm to Your Table</h2>
          <p className="py-2 text-lg leading-relaxed text-base-content/80">
            We believe that fresher is better. That's why we partner directly with local farmers and artisans to bring you produce that was picked at peak ripeness. No long storage times, no artificial preservatives.
          </p>
          <p className="py-4 text-lg leading-relaxed text-base-content/80">
            Every item in our store is hand-selected to ensure the highest quality for your family. Sustainable farming, fair prices for producers, and healthy food for you.
          </p>
          <button className="btn btn-link px-0 text-primary mt-4 text-lg no-underline hover:underline">Read Our Story &rarr;</button>
        </div>
      </div>
    </section>
  );
}
