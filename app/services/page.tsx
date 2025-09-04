'use client';

import Hero from "../components/Hero";
import Accordion from "../components/Accordion";
import { useEffect, useState } from "react";

export default function Services() {
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

  const faqItems = [
    {
      question: "What services does EGC World offer?",
      answer: "We offer comprehensive business consultancy services including regulatory compliance, corporate consulting, training programs, and marketing solutions. Our services are designed to help businesses of all sizes achieve sustainable growth while maintaining compliance with government regulations."
    },
    {
      question: "How long does it take to see results?",
      answer: "The timeline varies depending on the service and project scope. Some clients see immediate improvements in compliance processes, while others may take 3-6 months for full implementation. We provide regular progress updates and work closely with you to ensure timely delivery."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to established enterprises. We believe every business deserves expert guidance, and we tailor our services to meet the specific needs and budget constraints of small businesses."
    },
    {
      question: "What makes EGC World different from other consultancies?",
      answer: "Our unique combination of regulatory expertise, business strategy, and personalized approach sets us apart. We don't just provide advice – we implement solutions and work alongside your team to ensure success. Our 15+ years of experience and proven track record speak for themselves."
    },
    {
      question: "How do you ensure compliance with changing regulations?",
      answer: "We stay constantly updated with regulatory changes through our network of industry experts and continuous monitoring. Our team regularly attends training sessions and maintains certifications to provide you with the most current and accurate compliance guidance."
    }
  ];

  return (
    <>
      <Hero
        backgroundImage="/images/our services.jpg"
        title="Our Services"
        subtitle="Comprehensive solutions designed to drive your business forward"
        titleClassName="text-4xl md:text-8xl font-bold mb-6"
        subtitleClassName="text-xl md:text-4xl mb-8 text-white max-w-4xl mx-auto"
      />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="services-overview-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['services-overview-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-black-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-black-900 max-w-3xl mx-auto">
              From regulatory compliance to strategic growth, we provide end-to-end solutions that address your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Consulting */}
            <div 
              id="consulting-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 ${
                isVisible['consulting-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Business Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Strategic guidance to optimize operations, improve efficiency, and drive sustainable growth for your business.
              </p>
              <div className="mb-6">
                <img src="/images/consulting 2.jpg" alt="Business Consulting" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/services/consulting" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Training & Development */}
            <div 
              id="training-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-100 ${
                isVisible['training-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Training & Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Customized workshops and corporate training programs designed to enhance skills and boost performance.
              </p>
              <div className="mb-6">
                <img src="/images/L&D Services.jpg" alt="Training & Development" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/services/training" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Compliance Solutions */}
            <div 
              id="compliance-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-200 ${
                isVisible['compliance-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Compliance Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expert guidance to ensure your business meets all regulatory requirements and industry standards.
              </p>
              <div className="mb-6">
                <img src="/images/compliance-services.jpg" alt="Compliance Solutions" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/services/compliance" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Marketing Services */}
            <div 
              id="marketing-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-300 ${
                isVisible['marketing-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543 1.766-5.067 3-9.168 3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Marketing Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Creative strategies and digital solutions to boost brand visibility and drive customer engagement.
              </p>
              <div className="mb-6">
                <img src="/images/Marketing-Services.jpg" alt="Marketing Services" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/services/marketing" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* SEO Services */}
            <div 
              id="seo-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-400 ${
                isVisible['seo-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">SEO Services</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Search engine optimization strategies to improve your online visibility and drive organic traffic.
              </p>
              <div className="mb-6">
                <img src="/images/SEO-Services.jpg" alt="SEO Services" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/services/seo" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold">
                Learn More →
              </a>
            </div>

            {/* Project Implementation */}
            <div 
              id="project-service"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-500 ${
                isVisible['project-service'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Project Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                End-to-end project management and implementation services for regulatory and business initiatives.
              </p>
              <div className="mb-6">
                <img src="/images/projects-main-bg.jpg" alt="Project Implementation" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <a href="/projects" className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="why-choose-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['why-choose-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine expertise, innovation, and personalized attention to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              id="benefit-1"
              data-animate
              className={`text-center transition-all duration-1000 ${
                isVisible['benefit-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Proven Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                15+ years of experience in regulatory compliance and business consultancy.
              </p>
            </div>

            <div 
              id="benefit-2"
              data-animate
              className={`text-center transition-all duration-1000 delay-100 ${
                isVisible['benefit-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Personalized Approach</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tailored solutions that address your specific business challenges and goals.
              </p>
            </div>

            <div 
              id="benefit-3"
              data-animate
              className={`text-center transition-all duration-1000 delay-200 ${
                isVisible['benefit-3'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Results-Driven</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Focus on delivering measurable outcomes and tangible business improvements.
              </p>
            </div>

            <div 
              id="benefit-4"
              data-animate
              className={`text-center transition-all duration-1000 delay-300 ${
                isVisible['benefit-4'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Continuous assistance and support throughout your business journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="faq-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['faq-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our services and approach.
            </p>
          </div>
          
          <div 
            id="faq-content"
            data-animate
            className={`transition-all duration-1000 delay-200 ${
              isVisible['faq-content'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
