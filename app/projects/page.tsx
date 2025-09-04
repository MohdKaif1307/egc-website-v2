'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/projects-main-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Key Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Discover how we've helped businesses achieve compliance, growth, and success through our innovative solutions.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="projects-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['projects-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From regulatory compliance to business transformation, our projects showcase our expertise and commitment to client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eat Right India Initiative */}
            <div 
              id="eat-right-project"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['eat-right-project'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="rounded-xl h-80 overflow-hidden mb-6">
                <Image 
                  src="/images/Eat-Right-2.jpg" 
                  alt="Eat Right India Initiative" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Eat Right India Initiative
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A comprehensive food safety and hygiene compliance project for restaurants and food service establishments. We helped implement FSSAI standards, trained staff, and established monitoring systems to ensure food safety compliance.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">FSSAI compliance implementation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Staff training and certification</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Quality management systems</span>
                </div>
              </div>
              <a href="/projects/eat-right-india" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Legal Metrology Affairs */}
            <div 
              id="legal-metrology-project"
              data-animate
              className={`transition-all duration-1000 delay-200 ${
                isVisible['legal-metrology-project'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="rounded-xl h-80 overflow-hidden mb-6">
                <Image 
                  src="/images/legal.jpg" 
                  alt="Legal Metrology Affairs" 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Legal Metrology Affairs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Regulatory compliance project for manufacturing and retail businesses. We ensured adherence to weights and measures regulations, implemented verification systems, and provided ongoing compliance support.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Weights & measures compliance</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Verification system implementation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Ongoing compliance support</span>
                </div>
              </div>
              <a href="/projects/legal-metrology" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="stats-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['stats-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our projects have delivered measurable results and lasting impact for businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              id="stat-1"
              data-animate
              className={`text-center transition-all duration-1000 ${
                isVisible['stat-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>

            <div 
              id="stat-2"
              data-animate
              className={`text-center transition-all duration-1000 delay-100 ${
                isVisible['stat-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>

            <div 
              id="stat-3"
              data-animate
              className={`text-center transition-all duration-1000 delay-200 ${
                isVisible['stat-3'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>

            <div 
              id="stat-4"
              data-animate
              className={`text-center transition-all duration-1000 delay-300 ${
                isVisible['stat-4'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="process-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['process-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Project Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures successful project delivery and lasting results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              id="process-step-1"
              data-animate
              className={`text-center transition-all duration-1000 ${
                isVisible['process-step-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We begin by understanding your business needs, challenges, and objectives to develop a tailored project plan.
              </p>
            </div>

            <div 
              id="process-step-2"
              data-animate
              className={`text-center transition-all duration-1000 delay-100 ${
                isVisible['process-step-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Planning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detailed project planning with timelines, milestones, and resource allocation to ensure smooth execution.
              </p>
            </div>

            <div 
              id="process-step-3"
              data-animate
              className={`text-center transition-all duration-1000 delay-200 ${
                isVisible['process-step-3'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert execution of the project plan with regular updates and transparent communication throughout.
              </p>
            </div>

            <div 
              id="process-step-4"
              data-animate
              className={`text-center transition-all duration-1000 delay-300 ${
                isVisible['process-step-4'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ongoing support and maintenance to ensure your project continues to deliver value and meet evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="cta-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['cta-content'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your business goals and implement successful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
