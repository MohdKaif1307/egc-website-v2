import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Hero
        backgroundImage="/images/about-us.jpg"
        title="About EGC World"
        subtitle="Empowering businesses through expert consultancy, regulatory compliance, and strategic growth solutions for over a decade."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300">
            <p className="text-xl leading-relaxed mb-6">
              At <strong>Emmanuel Global Consultancies (EGC World)</strong>, we believe that every business deserves a partner who can simplify compliance and fuel growth. Founded over 10 years ago, we started with a single mission: <strong>to help businesses navigate complex regulations and thrive in competitive markets.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What began as a small consultancy focused on regulatory compliance has evolved into a comprehensive business solutions provider. Today, we serve entrepreneurs, startups, and established enterprises across various industries, helping them achieve sustainable growth while maintaining full regulatory compliance.
            </p>
            <p className="text-lg leading-relaxed">
              Our approach combines deep industry expertise with personalized service, ensuring that every client receives solutions tailored to their unique challenges and goals. We don't just provide advice – we partner with you to implement lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Integrity</h4>
              <p className="text-gray-600 dark:text-gray-300">We operate with complete transparency and honesty in all our dealings.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">We strive for the highest standards in every project and interaction.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Client-Centricity</h4>
              <p className="text-gray-600">We put our clients at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Achievements
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                <AnimatedCounter end={10} suffix="+" className="text-6xl font-bold text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-gray-500 dark:text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                <AnimatedCounter end={1000} suffix="+" className="text-6xl font-bold text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-gray-500 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                <AnimatedCounter end={500} suffix="+" className="text-6xl font-bold text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-gray-500 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                <AnimatedCounter end={50} suffix="+" className="text-6xl font-bold text-gray-600 dark:text-gray-300" />
              </div>
              <div className="text-gray-500 dark:text-gray-400">Expert Consultants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image 
                  src="/images/Mr. Elisha Johnson.jpg" 
                  alt="Mr. Elisha Johnson" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Mr. Elisha Johnson</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Founder & Director</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Over 15 years of experience in business consulting and regulatory compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image 
                  src="/images/Mrs. Megha H. Johnson.png" 
                  alt="Mrs. Megha H. Johnson" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Mrs. Megha H. Johnson</h4>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Managing Director</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Expert in process optimization and team development with 12+ years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
