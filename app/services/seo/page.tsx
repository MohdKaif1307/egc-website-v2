import Image from "next/image";

export default function SEOService() {
  return (
    <>
            {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-700 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/seo-digital-bg.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SEO Optimization Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                Boost your online visibility and drive organic traffic with our proven SEO strategies and expert optimization techniques.
              </p>
              <a
                href="/contact"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get SEO Audit
              </a>
            </div>
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-lg">Search Engine Optimization</p>
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
                Dominate Search Results with Expert SEO
              </h2>
              <p className="text-lg text-white-600 mb-6">
                In today's digital landscape, appearing on the first page of search results is crucial for business success. Our comprehensive SEO services help you climb the search rankings and attract qualified organic traffic to your website.
              </p>
              <p className="text-lg text-white-600 mb-8">
                From technical optimization to content strategy, our data-driven approach ensures sustainable growth in search visibility and conversions.
              </p>
            </div>
            <div className="rounded-xl h-96 overflow-hidden">
              <Image 
                src="/images/business-growth.jpg" 
                alt="SEO optimization strategies for business growth and online visibility" 
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive optimization solutions for maximum search visibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical SEO</h3>
              <p className="text-gray-600 mb-4">
                Optimize your website's technical foundation for better search engine crawling and indexing.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Website speed optimization</li>
                <li>• Mobile responsiveness</li>
                <li>• XML sitemap creation</li>
                <li>• Schema markup implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Optimization</h3>
              <p className="text-gray-600 mb-4">
                Create high-quality, search-optimized content that ranks well and engages your audience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Keyword research and strategy</li>
                <li>• Content creation and optimization</li>
                <li>• Meta tags and descriptions</li>
                <li>• Content gap analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Link Building</h3>
              <p className="text-gray-600 mb-4">
                Build high-quality backlinks to improve your website's authority and search rankings.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Guest posting and outreach</li>
                <li>• Broken link building</li>
                <li>• Local citation building</li>
                <li>• Social media link building</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local SEO</h3>
              <p className="text-gray-600 mb-4">
                Optimize your business for local search results and attract customers in your area.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Google My Business optimization</li>
                <li>• Local keyword targeting</li>
                <li>• Review management</li>
                <li>• Local directory submissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-white-600">
              A proven methodology for sustainable search engine success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Audit & Analysis</h3>
              <p className="text-white-600">
                Comprehensive website audit to identify SEO opportunities and issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Strategy Development</h3>
              <p className="text-white-600">
                Create customized SEO strategy based on your business goals and target audience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Implementation</h3>
              <p className="text-white-600">
                Execute technical optimizations, content improvements, and link building campaigns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white-900 mb-2">Monitoring & Optimization</h3>
              <p className="text-white-600">
                Track performance metrics and continuously optimize for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Let's discuss how our SEO services can help you climb the search rankings and attract more qualified traffic to your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get SEO Audit
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
