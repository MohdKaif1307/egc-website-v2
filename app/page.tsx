'use client';

import Image from "next/image";
import AnimatedCounter from "./components/AnimatedCounter";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      backgroundImage: "/images/Landing-Page-Compliance.jpg",
      tagline: "Simplifying Compliance, Empowering Businesses",
      description: "We make compliance easy with expert guidance, smooth processes, and reliable business solutions.",
      ctaPrimary: "Talk to Our Experts",
      ctaSecondary: "Explore Services",
      ctaPrimaryLink: "/contact",
      ctaSecondaryLink: "/services"
    },
    {
      id: 2,
      backgroundImage: "/images/Landing-Page-Marketing.jpg",
      tagline: "Creative Strategies That Drive Growth.",
      description: "Our marketing solutions combine creativity and strategy to boost your brand visibility, leads, and sales.",
      ctaPrimary: "Our Services",
      ctaSecondary: "Learn More",
      ctaPrimaryLink: "/services/marketing",
      ctaSecondaryLink: "/services"
    },
    {
      id: 3,
      backgroundImage: "/images/landing-page-consultancy.jpg",
      tagline: "Expert Guidance for Smarter Decisions",
      description: "Expert business consultancy that empowers entrepreneurs with insights, strategies, and smart decision-making.",
      ctaPrimary: "Our Serivices",
      ctaSecondary: "Get Started",
      ctaPrimaryLink: "/services/consulting",
      ctaSecondaryLink: "/contact"
    },
         {
       id: 4,
       backgroundImage: "/images/L&D-lannding.jpg",
       tagline: "Transforming Skills into Success",
       description: "From leadership training to skill development, we help businesses nurture talent and unlock potential.",
       ctaPrimary: "Our Trainings",
       ctaSecondary: "Learn More",
       ctaPrimaryLink: "/services/training",
       ctaSecondaryLink: "/contact"
     }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Hero Section with Background Image Carousel */}
             <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white pt-0 pb-20 overflow-hidden h-screen min-h-[600px]">
        {/* Background Image Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000">
              {heroSlides[currentSlide].tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto transition-all duration-1000">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href={heroSlides[currentSlide].ctaPrimaryLink}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentSlide].ctaPrimary}
              </a>
              <a 
                href={heroSlides[currentSlide].ctaSecondaryLink}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentSlide].ctaSecondary}
              </a>
            </div>
            <p className="text-lg text-blue-200">
              Trusted by entrepreneurs, startups, and enterprises for over 15 years.
            </p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive consultancy designed to simplify compliance and strengthen your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business & Management Consulting */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Business & Management Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expert guidance to streamline operations, compliance, and growth strategies.
              </p>
              <a href="/services/consulting" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                Explore Consulting →
              </a>
            </div>

            {/* Marketing for Your Brand */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543 1.766-5.067 3-9.168 3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Marketing for Your Brand</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Integrated digital and brand marketing to grow awareness, engagement, and conversions.
              </p>
              <a href="/services/marketing" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold">
                Explore Marketing →
              </a>
            </div>

                         {/* Corporate Compliance Solutions */}
             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Corporate Compliance Solutions</h3>
               <p className="text-gray-600 dark:text-gray-300 mb-6">
                 Ensure your business stays aligned with government regulations and industry standards.
               </p>
               <a href="/services/compliance" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">
                 Get Compliance Support →
               </a>
             </div>

             {/* Learning & Development Programs */}
             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Learning & Development Programs</h3>
               <p className="text-gray-600 dark:text-gray-300 mb-6">
                 Customized workshops and corporate training designed to build skills and performance.
               </p>
               <a href="/services/training" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold">
                 View Programs →
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* Making a Difference */}
      <section className="py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Making a Difference
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our formula puts a focus on helping you achieve your business objectives help prove clarity on complex compliance topics. We spend time understanding your organisation and objectives to provide bespoke client advisory services. Whether that is training your in-house team, building a framework that suits your organisation, or getting hands-on in your day-to-day issues. We take the time to understand your uniques issues to help you deliver results.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Talk to Our Team
              </a>
            </div>
                                                                                                       <div className="rounded-3xl h-[500px] overflow-hidden">
                 <Image 
                   src="/images/Making-Difference.png" 
                   alt="Making a Difference at EGC World" 
                   width={400}
                   height={500}
                   className="w-full h-full object-cover rounded-3xl"
                 />
               </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Why Choose Emmanuel Global Consultancies?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                At EGC World, we specialize in regulatory project implementation, corporate consultancy, training, and brand development. With over a decade of expertise, we help businesses simplify compliance, achieve growth, and stay future-ready.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <AnimatedCounter end={10} suffix="+ Years of Consultancy Experience" />
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    <AnimatedCounter end={1000} suffix="+ Projects Delivered Successfully" />
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated Experts for Every Client</span>
                </div>
              </div>
              <a href="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                Know More About Us →
              </a>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <Image 
                src="/images/why-choose-us.jpg" 
                alt="EGC World team collaboration and professional consulting" 
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Connect With Us
            </h2>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Fill in your details and our team will connect with you within 24 hours.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Email / Phone"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" >
                <option value="">Service Needed</option>
                <option value="consulting">Consulting</option>
                <option value="training">Training</option>
                <option value="compliance">Compliance</option>
                <option value="marketing">Marketing</option>
                <option value="projects">Projects</option>
              </select>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request a Callback
              </button>
            </form>
          </div>
          
          <div className="mt-12 text-center text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <span className="mr-2">📞</span>
                <a href="tel:+918527273997" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 85272 73997
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📧</span>
                <a href="mailto:support@egcworld.in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  support@egcworld.in
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-2">📍</span>
                <span>606, Eros City Square, Gurugram, Haryana, 122018</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
