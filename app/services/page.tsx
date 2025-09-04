import Hero from "../components/Hero";
import Accordion from "../components/Accordion";

export default function Services() {
  return (
    <>
      <Hero
        backgroundImage="/images/our services.jpg"
        title="Comprehensive Services Tailored to Your Business Needs"
        subtitle="From compliance to brand growth, our services are designed to simplify challenges and unlock new opportunities for businesses of all sizes."
        gradient="from-blue-900 via-blue-800 to-blue-700"
      >
        <a 
          href="/contact" 
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Talk to Our Experts
        </a>
      </Hero>

      {/* Business & Management Consulting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                1. Business & Management Consulting
              </h2>
              <p className="text-lg text-white-600 mb-6">
                Running a business today means facing complex challenges — from compliance issues to operational inefficiencies. At EGC World, our consulting services are designed to help organizations overcome these obstacles and unlock growth.
              </p>
              <p className="text-lg text-white-600 mb-8">
                We work with businesses of all sizes to:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">Analyze operations and identify bottlenecks.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">Design strategies that improve efficiency and reduce risk.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">Ensure compliance with regulatory requirements.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700">Support growth through financial planning, process improvements, and organizational restructuring.</span>
                </li>
              </ul>
              <p className="text-lg text-white-600 mb-8">
                Whether you're a startup setting up your systems or an established enterprise seeking efficiency, our consulting team brings decades of combined experience to guide your success.
              </p>
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                Explore Consulting Services →
              </a>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <img src="/images/consulting 2.jpg" alt="Business & Management Consulting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl h-96 overflow-hidden">
              <img src="/images/L&D Services.jpg" alt="Learning & Development Programs" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                2. Learning & Development Programs
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your people are your greatest asset. We design customized workshops and training programs to build stronger, future-ready teams.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our programs cover:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Leadership Development</strong> – preparing managers for tomorrow's challenges.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Skill-Building Workshops</strong> – tailored for sales, communication, negotiation, and more.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Corporate Training</strong> – aligned with organizational goals to boost productivity.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Employee Engagement Programs</strong> – nurturing motivation and retention.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mb-8">
                Unlike generic training, our programs are hands-on, interactive, and industry-relevant. We measure outcomes, not just attendance — ensuring every session contributes to business impact.
              </p>
              <a href="/contact" className="text-green-600 hover:text-green-700 font-semibold">
                View Training Programs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Compliance Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                3. Corporate Compliance Solutions
              </h2>
              <p className="text-lg text-white-600 mb-6">
                Staying compliant with laws and regulations can be overwhelming. Non-compliance not only brings legal risks but also damages reputation.
              </p>
              <p className="text-lg text-white-600 mb-8">
                Our compliance experts simplify the process by offering:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Regulatory Monitoring</strong> – staying updated on changing laws.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Compliance Audits</strong> – identifying gaps before they become problems.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Documentation Support</strong> – preparing and maintaining required records.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Risk Management</strong> – ensuring smooth operations without legal hurdles.</span>
                </li>
              </ul>
              <p className="text-lg text-white-600 mb-8">
                We help businesses in sectors like food, retail, manufacturing, and services stay fully compliant so they can focus on growth without worrying about penalties.
              </p>
              <a href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
                Get Compliance Support →
              </a>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <img src="/images/compliance-services.jpg" alt="Corporate Compliance Solutions" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl h-96 overflow-hidden">
              <img src="/images/Seo-Services.jpg" alt="SEO Optimization Services" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                4. SEO Optimization Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Today, success isn't just about running a business — it's about being found online. Our SEO services help your brand rank higher, attract the right audience, and convert visitors into customers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Keyword Research & Strategy</strong> – identifying the terms your customers are searching for.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>On-Page Optimization</strong> – improving site structure, speed, and content.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Off-Page SEO & Link Building</strong> – building authority for your domain.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Local SEO</strong> – helping your business appear in maps and local searches.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mb-8">
                With a data-driven approach, we ensure measurable improvements in visibility, traffic, and conversions.
              </p>
              <a href="/contact" className="text-orange-600 hover:text-orange-700 font-semibold">
                Boost My SEO →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing for Your Brand */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                5. Marketing for Your Brand
              </h2>
              <p className="text-lg text-white-600 mb-6">
                Building a brand is more than advertising — it's about telling your story. Our marketing services help businesses connect with the right customers through the right channels.
              </p>
              <p className="text-lg text-white-600 mb-8">
                We specialize in:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Digital Marketing Campaigns</strong> – targeted campaigns that deliver ROI.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Social Media Marketing</strong> – building engagement and brand recognition.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Content Marketing</strong> – blogs, articles, and resources that establish authority.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white-700"><strong>Integrated Marketing Strategies</strong> – combining online and offline efforts for maximum reach.</span>
                </li>
              </ul>
              <p className="text-lg text-white-600 mb-8">
                Whether you're launching a new product or scaling your business, we ensure your brand stands out in a competitive market.
              </p>
              <a href="/contact" className="text-red-600 hover:text-red-700 font-semibold">
                Grow My Brand →
              </a>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <img src="/images/Marketing-Services.jpg" alt="Marketing for Your Brand" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose EGC World */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EGC World?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Over 10 years of consultancy experience</h4>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expertise across compliance, consulting, training, and marketing</h4>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customized solutions for every business need</h4>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Trusted by 1000+ clients across India</h4>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">A one-stop partner for compliance and growth</h4>
            </div>
          </div>
        </div>
      </section>

      <Accordion
        title="Frequently Asked Questions (FAQs)"
        subtitle="Get answers to common questions about our services"
        items={[
          {
            question: "What industries do you serve?",
            answer: "We work with businesses in food, retail, manufacturing, services, and startups — tailoring our services to each industry's unique needs."
          },
          {
            question: "Do you provide customized consulting packages?",
            answer: "Yes, every client's challenges are different. We design packages that fit your business size, industry, and goals."
          },
          {
            question: "How do your training programs differ from others?",
            answer: "Our training is interactive, measurable, and practical, ensuring real results instead of theoretical sessions."
          },
          {
            question: "How quickly can we see results from SEO services?",
            answer: "SEO is a long-term investment. Typically, our clients see measurable improvements within 3–6 months."
          },
          {
            question: "What makes your compliance solutions unique?",
            answer: "Our compliance solutions combine regulatory expertise with practical implementation strategies, ensuring your business not only meets requirements but also operates more efficiently."
          },
          {
            question: "Do you offer ongoing support after project completion?",
            answer: "Yes, we provide ongoing support and maintenance to ensure your solutions continue to work effectively and adapt to changing business needs."
          }
        ]}
      />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to simplify compliance and grow your business?
          </h2>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Schedule a Consultation Today
          </a>
        </div>
      </section>
    </>
  );
}
