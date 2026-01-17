import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Services</h6> 
        <Link href="/products" className="link link-hover">Fresh Products</Link>
        <Link href="#" className="link link-hover">Delivery</Link>
        <Link href="#" className="link link-hover">Recipes</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <Link href="/about" className="link link-hover">About us</Link>
        <Link href="#" className="link link-hover">Contact</Link>
        <Link href="#" className="link link-hover">Jobs</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link href="#" className="link link-hover">Terms of use</Link>
        <Link href="#" className="link link-hover">Privacy policy</Link>
        <Link href="#" className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
}
