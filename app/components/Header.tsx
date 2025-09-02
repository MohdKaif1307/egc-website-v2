'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
        : 'bg-white dark:bg-gray-900 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 text-gray-900 dark:text-white">
              <Image 
                src="/images/egc-logo.svg" 
                alt="EGC World Logo" 
                width={60} 
                height={60} 
                className="h-25 w-auto dark:invert dark:brightness-0 dark:contrast-100" 
              />
              {/* <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary-800">EGC World</h1>
                <p className="text-xs text-primary-600">SOCIAL RENAISSANCE</p>
              </div> */}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors font-medium text-xl">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors font-medium text-xl">About Us</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors flex items-center font-medium text-xl">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services/consulting" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Business & Management Consulting
                  </Link>
                  <Link href="/services/training" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Learning & Development Programs
                  </Link>
                  <Link href="/services/compliance" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Corporate Compliance Solutions
                  </Link>
                  <Link href="/services/seo" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    SEO Optimization
                  </Link>
                  <Link href="/services/marketing" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Marketing for Your Brand
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Regulatory Projects Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors flex items-center font-medium text-xl">
                Regulatory Projects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/projects/eat-right-india" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Eat Right India Initiative
                  </Link>
                  <Link href="/projects/legal-metrology" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 transition-colors">
                    Legal Metrology Affairs
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/insights" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors font-medium text-xl">Insights / Blog</Link>
            
            {/* Get in Touch CTA Button */}
            <Link 
              href="/contact" 
              className="bg-accent-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg">Services</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/services/consulting" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business & Management Consulting
                  </Link>
                  <Link 
                    href="/services/training" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learning & Development Programs
                  </Link>
                  <Link 
                    href="/services/compliance" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Corporate Compliance Solutions
                  </Link>
                  <Link 
                    href="/services/seo" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SEO Optimization
                  </Link>
                  <Link 
                    href="/services/marketing" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Marketing for Your Brand
                  </Link>
                </div>
              </div>

              {/* Regulatory Projects Section */}
              <div className="space-y-2">
                <p className="text-gray-900 dark:text-gray-100 font-semibold text-lg">Regulatory Projects</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/projects/eat-right-india" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Eat Right India Initiative
                  </Link>
                  <Link 
                    href="/projects/legal-metrology" 
                    className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Legal Metrology Affairs
                  </Link>
                </div>
              </div>

              <Link 
                href="/insights" 
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights / Blog
              </Link>

              {/* Get in Touch CTA Button */}
              <Link 
                href="/contact" 
                className="block bg-accent-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;