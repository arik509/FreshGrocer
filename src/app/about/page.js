import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary badge-outline mb-4">Established 2024</div>
            <h1 className="text-5xl font-extrabold mb-6">Redefining Freshness</h1>
            <p className="py-6 text-xl leading-relaxed text-base-content/80">
              FreshGrocer started with a simple mission: to bridge the gap between local farmers and your kitchen table. We believe that everyone deserves access to healthy, organic, and ethically sourced food.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-emerald-100 flex items-center justify-center text-9xl">
             🌱
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
            <div className="collapse collapse-plus bg-base-200 mb-4 rounded-xl">
              <input type="radio" name="my-accordion-3" defaultChecked /> 
              <div className="collapse-title text-xl font-medium">Sustainable Farming</div>
              <div className="collapse-content"> 
                <p>We only work with partners who practice regenerative agriculture, ensuring the land stays fertile for generations to come.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4 rounded-xl">
              <input type="radio" name="my-accordion-3" /> 
              <div className="collapse-title text-xl font-medium">Fair Trade</div>
              <div className="collapse-content"> 
                <p>Our farmers set their prices. We believe in fair compensation for the hard work that goes into growing our food.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4 rounded-xl">
              <input type="radio" name="my-accordion-3" /> 
              <div className="collapse-title text-xl font-medium">Zero Waste</div>
              <div className="collapse-content"> 
                <p>We aim for 100% recyclable or compostable packaging by 2025. Currently, we use minimal plastic in all our deliveries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-primary text-primary-content text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Join the Movement</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            Want to be a part of the FreshGrocer family? We are constantly looking for passionate individuals to join our team.
          </p>
          <Link href="/contact" className="btn btn-secondary btn-lg rounded-full">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
