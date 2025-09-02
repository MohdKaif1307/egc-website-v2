import Image from "next/image";

export default function MarketingService() {
  return (
    <>
            {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-900 via-pink-800 to-pink-700 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/marketing-strategy-bg.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Marketing for Your Brand
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-pink-100">
                Build a strong brand presence and reach your target audience with our comprehensive marketing solutions that drive growth and engagement.
              </p>
              <a
                href="/contact"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Marketing Strategy
              </a>
            </div>
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <p className="text-lg">Brand Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">
                Elevate Your Brand with Strategic Marketing
              </h2>
              <p className="text-lg text-white-600 mb-6">
                In today's competitive market, effective marketing is essential for business success. Our comprehensive marketing services help you build a strong brand identity, reach your target audience, and drive meaningful engagement that converts to business growth.
              </p>
              <p className="text-lg text-white-600 mb-8">
                From digital marketing campaigns to brand strategy development, we create integrated marketing solutions that align with your business objectives and deliver measurable results.
              </p>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <Image 
                src="/images/business-growth.jpg" 
                alt="Marketing strategy and business growth through digital marketing campaigns" 
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to build your brand and drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Strategy</h3>
              <p className="text-gray-600 mb-4">
                Develop a compelling brand identity and positioning that resonates with your target audience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Brand identity development</li>
                <li>• Brand positioning and messaging</li>
                <li>• Visual identity and guidelines</li>
                <li>• Brand voice and personality</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Create and execute digital marketing campaigns across multiple channels for maximum reach.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Social media marketing</li>
                <li>• Email marketing campaigns</li>
                <li>• Content marketing strategy</li>
                <li>• PPC and display advertising</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Marketing</h3>
              <p className="text-gray-600 mb-4">
                Connect with your local community and attract customers in your geographic area.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Local SEO optimization</li>
                <li>• Community engagement</li>
                <li>• Local advertising campaigns</li>
                <li>• Event marketing and sponsorships</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Marketing</h3>
              <p className="text-gray-600 mb-4">
                Drive measurable results with data-driven marketing strategies and campaign optimization.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Conversion rate optimization</li>
                <li>• Marketing analytics and reporting</li>
                <li>• A/B testing and optimization</li>
                <li>• ROI tracking and analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Marketing Channels We Specialize In
            </h2>
            <p className="text-xl text-white-600">
              Multi-channel approach for maximum brand exposure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600">
                Facebook, Instagram, LinkedIn, Twitter, and YouTube marketing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Marketing</h3>
              <p className="text-gray-600">
                Newsletter campaigns, automated sequences, and lead nurturing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Marketing</h3>
              <p className="text-gray-600">
                Blog posts, videos, infographics, and thought leadership content.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Paid Advertising</h3>
              <p className="text-gray-600">
                Google Ads, Facebook Ads, display advertising, and retargeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600">
              A strategic approach to building your brand and driving results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Analysis</h3>
              <p className="text-gray-600">
                Understand your market, competitors, and target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
              <p className="text-gray-600">
                Create comprehensive marketing strategy and campaign plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">
                Implement campaigns across selected channels and platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">
                Monitor performance and continuously optimize for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
            Let's discuss how our marketing services can help you build a strong brand presence and drive meaningful growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Marketing Strategy
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
