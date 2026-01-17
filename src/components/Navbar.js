'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/95 backdrop-blur-md shadow-md sticky top-0 z-50 px-4 sm:px-8 border-b border-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2 hover:bg-primary/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 gap-2 border border-base-200">
            <li><Link href="/" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">Home</Link></li>
            <li><Link href="/products" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">Products</Link></li>
            <li><Link href="/about" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">Contact</Link></li>
            <li><Link href="/login" className="hover:bg-primary/10 hover:text-primary transition-all duration-300">Login</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-2xl font-extrabold tracking-tighter p-0 hover:bg-transparent group">
          <span className="text-primary group-hover:scale-110 transition-transform duration-300 inline-block">Fresh</span>
          <span className="group-hover:tracking-wide transition-all duration-300">Grocer</span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li>
            <Link href="/" className="relative group px-4 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Home</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="relative group px-4 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Products</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative group px-4 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">About Us</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group px-4 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Contact</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end gap-3">
        <Link href="/login" className="btn btn-ghost btn-sm font-medium hidden sm:flex hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 rounded-full">
          Login
        </Link>
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm badge-accent indicator-item border-none text-white shadow-sm group-hover:scale-110 transition-transform duration-300">0</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-2xl border border-base-200 animate-fade-in">
            <div className="card-body">
              <span className="font-bold text-lg">0 Items</span>
              <span className="text-info text-sm">Subtotal: $0.00</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block btn-sm hover:shadow-lg hover:scale-105 transition-all duration-300">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
