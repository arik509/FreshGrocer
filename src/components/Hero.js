import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero min-h-[70vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-9xl animate-bounce duration-[3000ms]">
          🥗
        </div>
        <div className="text-center lg:text-left">
          <div className="badge badge-accent badge-outline mb-4">100% Organic</div>
          <h1 className="text-5xl font-bold leading-tight">
            Eat Fresh, <br/>
            <span className="text-primary">Live Healthy</span>
          </h1>
          <p className="py-6 text-lg max-w-md mx-auto lg:mx-0">
            Get organic, farm-fresh produce delivered straight to your door. We partner with local farmers to bring you the best quality.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
             <Link href="/products" className="btn btn-primary rounded-full px-8">Shop Now</Link>
             <Link href="/about" className="btn btn-outline rounded-full px-8">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
