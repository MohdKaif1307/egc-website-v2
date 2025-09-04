'use client';

import Image from "next/image";
import Hero from "../components/Hero";
import { useEffect, useState } from "react";

export default function About() {
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
      <Hero
        backgroundImage="/images/about-us.jpg"
        title="About EGC World"
        subtitle="Empowering businesses through expert consultancy and innovative solutions"
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              id="story-text"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible['story-text'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Founded with a vision to simplify complex business challenges, EGC World has grown from a small consultancy to a trusted partner for businesses across India. Our journey began with a simple belief: every business deserves expert guidance to navigate regulatory complexities and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Over the years, we've helped hundreds of businesses streamline their operations, ensure compliance, and build robust foundations for future success. Our team of experts brings together decades of combined experience in regulatory affairs, business strategy, and corporate development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we continue to evolve and adapt, staying ahead of industry trends and regulatory changes to provide our clients with the most current and effective solutions.
              </p>
            </div>
            <div 
              id="story-image"
              data-animate
              className={`rounded-xl h-96 overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible['story-image'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <Image 
                src="/images/office-meeting.jpg" 
                alt="EGC World team in a strategic meeting" 
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="mission-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['mission-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Driving business success through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              id="mission-card"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 ${
                isVisible['mission-card'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses with innovative solutions that simplify compliance, drive growth, and create sustainable value. We strive to be the trusted partner that transforms complex challenges into opportunities for success.
              </p>
            </div>

            <div 
              id="vision-card"
              data-animate
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-200 ${
                isVisible['vision-card'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the leading consultancy that sets industry standards for excellence, innovation, and client success. We envision a future where every business has access to world-class guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="values-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['values-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              id="value-1"
              data-animate
              className={`text-center transition-all duration-1000 ${
                isVisible['value-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct business with honesty, transparency, and ethical principles that build lasting trust.
              </p>
            </div>

            <div 
              id="value-2"
              data-animate
              className={`text-center transition-all duration-1000 delay-100 ${
                isVisible['value-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for the highest quality in every project, delivering results that exceed expectations.
              </p>
            </div>

            <div 
              id="value-3"
              data-animate
              className={`text-center transition-all duration-1000 delay-200 ${
                isVisible['value-3'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work closely with our clients, understanding their needs and partnering for success.
              </p>
            </div>

            <div 
              id="value-4"
              data-animate
              className={`text-center transition-all duration-1000 delay-300 ${
                isVisible['value-4'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We embrace new ideas and technologies to provide cutting-edge solutions for our clients.
              </p>
            </div>

            <div 
              id="value-5"
              data-animate
              className={`text-center transition-all duration-1000 delay-400 ${
                isVisible['value-5'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Passion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are passionate about helping businesses succeed and committed to their growth journey.
              </p>
            </div>

            <div 
              id="value-6"
              data-animate
              className={`text-center transition-all duration-1000 delay-500 ${
                isVisible['value-6'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deliver on our promises, meeting deadlines and maintaining consistent quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="team-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['team-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving your business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div 
              id="team-member-1"
              data-animate
              className={`text-center transition-all duration-1000 ${
                isVisible['team-member-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image 
                  src="/images/Mr. Elisha Johnson.jpg" 
                  alt="Mr. Elisha Johnson - CEO & Founder" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Mr. Elisha Johnson
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">CEO & Founder</p>
              <p className="text-gray-600 dark:text-gray-300">
                With over 15 years of experience in regulatory affairs and business consultancy, Elisha leads our team with vision and expertise. His deep understanding of compliance challenges and business strategy has helped hundreds of companies achieve sustainable growth.
              </p>
            </div>

            <div 
              id="team-member-2"
              data-animate
              className={`text-center transition-all duration-1000 delay-200 ${
                isVisible['team-member-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image 
                  src="/images/Mrs. Megha H. Johnson.png" 
                  alt="Mrs. Megha H. Johnson - Director of Operations" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Mrs. Megha H. Johnson
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">Director of Operations</p>
              <p className="text-gray-600 dark:text-gray-300">
                Megha oversees our day-to-day operations and ensures that every client receives exceptional service. Her expertise in process optimization and client relationship management has been instrumental in building our reputation for reliability and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how EGC World can help you achieve your business goals and navigate the path to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
