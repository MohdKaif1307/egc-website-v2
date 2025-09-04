'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    const handleThemeChange = () => {
      // Check multiple ways dark mode might be detected
      const isDark = document.documentElement.classList.contains('dark') || 
                    document.body.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
      console.log('Dark mode detected:', isDark, 'Scrolled:', isScrolled);
      console.log('Document classes:', document.documentElement.classList.toString());
      console.log('Body classes:', document.body.classList.toString());
    };

    // Initial check
    handleThemeChange();

    window.addEventListener('scroll', handleScroll);
    
    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary-500 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center py-3 ${
          isScrolled ? '' : 'bg-transparent'
        }`}>
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 text-gray-900 dark:text-white">
              <Image 
                src="/images/egc-logo.svg" 
                alt="EGC World Logo" 
                width={50} 
                height={50} 
                className="h-20 w-auto transition-all duration-300"
                style={{
                  filter: (isScrolled || (!isScrolled && isDarkMode)) 
                    ? 'brightness(0) invert(1)' 
                    : 'none'
                }} 
              />
              {/* <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary-800">EGC World</h1>
                <p className="text-xs text-primary-600">SOCIAL RENAISSANCE</p>
              </div> */}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`transition-colors font-medium text-xl ${
              isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
            }`}>Home</Link>
            <Link href="/about" className={`transition-colors font-medium text-xl ${
              isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
            }`}>About Us</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className={`transition-colors flex items-center font-medium text-xl ${
                isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
              }`}>
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
              <button className={`transition-colors flex items-center font-medium text-xl ${
                isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-200'
              }`}>
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
            
            <Link href="/insights" className={`transition-colors font-medium text-xl ${
              isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
            }`}>Insights / Blog</Link>
            
            {/* Profile/Login Icon */}
            <Link href="/login" className={`transition-colors p-2 rounded-lg ${
              isScrolled ? 'text-white hover:text-amber-200 hover:bg-amber-700' : 'text-gray-900 dark:text-white hover:text-amber-600 hover:bg-amber-100'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
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
              className={`transition-colors ${
                isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
              }`}
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
          <div className={`md:hidden border-t ${
            isScrolled ? 'border-amber-700 bg-amber-800' : 'border-gray-200 bg-white dark:bg-gray-900'
          }`}>
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className={`block transition-colors text-lg font-medium ${
                  isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block transition-colors text-lg font-medium ${
                  isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <p className={`font-semibold text-lg ${
                  isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>Services</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/services/consulting" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business & Management Consulting
                  </Link>
                  <Link 
                    href="/services/training" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Learning & Development Programs
                  </Link>
                  <Link 
                    href="/services/compliance" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Corporate Compliance Solutions
                  </Link>
                  <Link 
                    href="/services/seo" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SEO Optimization
                  </Link>
                  <Link 
                    href="/services/marketing" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Marketing for Your Brand
                  </Link>
                </div>
              </div>

              {/* Regulatory Projects Section */}
              <div className="space-y-2">
                <p className={`font-semibold text-lg ${
                  isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>Regulatory Projects</p>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/projects/eat-right-india" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Eat Right India Initiative
                  </Link>
                  <Link 
                    href="/projects/legal-metrology" 
                    className={`block transition-colors ${
                      isScrolled ? 'text-amber-100 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-amber-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Legal Metrology Affairs
                  </Link>
                </div>
              </div>

              <Link 
                href="/insights" 
                className={`block transition-colors text-lg font-medium ${
                  isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Insights / Blog
              </Link>

              <Link 
                href="/login" 
                className={`flex items-center transition-colors text-lg font-medium ${
                  isScrolled ? 'text-white hover:text-amber-200' : 'text-gray-900 dark:text-white hover:text-amber-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Login
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