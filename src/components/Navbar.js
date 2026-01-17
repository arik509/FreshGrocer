'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 px-4 sm:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-extrabold tracking-tighter p-0 hover:bg-transparent">
          <span className="text-primary">Fresh</span>Grocer
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-medium">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
          <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      
      <div className="navbar-end gap-3">
        <Link href="/login" className="btn btn-ghost btn-sm font-medium hidden sm:flex hover:text-primary">
          Login
        </Link>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 transition-colors">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm badge-accent indicator-item border-none text-white shadow-sm">0</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="text-info text-sm">Subtotal: $0.00</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block btn-sm">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
