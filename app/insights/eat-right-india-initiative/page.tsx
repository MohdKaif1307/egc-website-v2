import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eat Right India Initiative: What Businesses Need to Know | EGC',
  description: 'Comprehensive guide to the Eat Right India Initiative and its impact on food businesses. Learn about compliance requirements, best practices, and how to align your business with this important initiative.',
}

export default function EatRightIndiaInitiative() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/images/eat-right-india-bg.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="hero-content relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eat Right India Initiative: What Businesses Need to Know
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Understanding the impact of this important initiative on food businesses and compliance requirements
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-blue-200">
              <span>Published: January 10, 2025</span>
              <span>•</span>
              <span>4 min read</span>
              <span>•</span>
              <span>Food Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="blog-content">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
              {/* Company Logo Background */}
              <div 
                className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain z-0"
                style={{
                  backgroundImage: "url('/images/egc-logo.svg')",
                  backgroundSize: "200px 200px",
                  backgroundPosition: "right bottom"
                }}
              ></div>
              <div className="relative z-10">
              <h2>Introduction</h2>
              <p>
                The Eat Right India Initiative, launched by the Food Safety and Standards Authority of India (FSSAI), 
                is a comprehensive program aimed at ensuring safe, healthy, and sustainable food for all citizens. 
                This initiative has significant implications for food businesses across the country.
              </p>

              <h2>What is the Eat Right India Initiative?</h2>
              <p>
                The Eat Right India Initiative is a flagship program that focuses on three key areas:
              </p>
              <ul>
                <li><strong>Safe Food:</strong> Ensuring food safety through proper hygiene and quality standards</li>
                <li><strong>Healthy Food:</strong> Promoting healthy eating habits and nutrition</li>
                <li><strong>Sustainable Food:</strong> Encouraging sustainable food practices and reducing food waste</li>
              </ul>

              <h2>Key Components of the Initiative</h2>
              <h3>1. Food Safety Management Systems</h3>
              <p>
                The initiative emphasizes the implementation of robust food safety management systems:
              </p>
              <ul>
                <li>Hazard Analysis and Critical Control Points (HACCP)</li>
                <li>Good Manufacturing Practices (GMP)</li>
                <li>Good Hygiene Practices (GHP)</li>
                <li>Regular food safety audits and inspections</li>
              </ul>

              <h3>2. Nutritional Standards</h3>
              <p>
                Businesses are encouraged to align with nutritional guidelines:
              </p>
              <ul>
                <li>Reduction of salt, sugar, and fat content</li>
                <li>Fortification of staple foods</li>
                <li>Clear nutritional labeling</li>
                <li>Promotion of healthy food options</li>
              </ul>

              <h3>3. Sustainability Practices</h3>
              <p>
                The initiative promotes sustainable food practices:
              </p>
              <ul>
                <li>Reduction of food waste</li>
                <li>Eco-friendly packaging</li>
                <li>Local sourcing of ingredients</li>
                <li>Energy-efficient production processes</li>
              </ul>

              <h2>Impact on Food Businesses</h2>
              <h3>Compliance Requirements</h3>
              <p>
                Food businesses need to ensure compliance with various aspects:
              </p>
              <ul>
                <li>FSSAI licensing and registration</li>
                <li>Food safety training for staff</li>
                <li>Regular quality testing and monitoring</li>
                <li>Proper documentation and record-keeping</li>
                <li>Implementation of food safety protocols</li>
              </ul>

              <h3>Business Opportunities</h3>
              <p>
                The initiative also presents several business opportunities:
              </p>
              <ul>
                <li>Development of healthy food products</li>
                <li>Innovation in food packaging</li>
                <li>Digital solutions for food safety</li>
                <li>Consulting services for compliance</li>
                <li>Training and certification programs</li>
              </ul>

              <h2>Implementation Strategies for Businesses</h2>
              <h3>1. Assessment and Planning</h3>
              <p>
                Start by conducting a comprehensive assessment of your current practices:
              </p>
              <ul>
                <li>Review existing food safety protocols</li>
                <li>Identify gaps in compliance</li>
                <li>Assess nutritional content of products</li>
                <li>Evaluate sustainability practices</li>
              </ul>

              <h3>2. Staff Training</h3>
              <p>
                Invest in comprehensive training programs:
              </p>
              <ul>
                <li>Food safety and hygiene training</li>
                <li>Nutrition awareness programs</li>
                <li>Sustainability best practices</li>
                <li>Regular refresher courses</li>
              </ul>

              <h3>3. Process Improvement</h3>
              <p>
                Implement systematic improvements:
              </p>
              <ul>
                <li>Upgrade food safety management systems</li>
                <li>Enhance quality control processes</li>
                <li>Improve supply chain management</li>
                <li>Adopt sustainable practices</li>
              </ul>

              <h2>Benefits of Compliance</h2>
              <h3>1. Enhanced Brand Reputation</h3>
              <p>
                Compliance with the Eat Right India Initiative demonstrates your commitment to food safety 
                and public health, enhancing your brand reputation and customer trust.
              </p>

              <h3>2. Market Access</h3>
              <p>
                Many retailers and institutional buyers prefer suppliers who comply with food safety 
                and sustainability standards, opening up new market opportunities.
              </p>

              <h3>3. Operational Efficiency</h3>
              <p>
                Implementing proper food safety and quality management systems often leads to improved 
                operational efficiency and reduced costs in the long run.
              </p>

              <h3>4. Regulatory Compliance</h3>
              <p>
                Staying ahead of regulatory requirements helps avoid penalties and legal issues, 
                ensuring smooth business operations.
              </p>

              <h2>Challenges and Solutions</h2>
              <h3>Common Challenges</h3>
              <p>
                Businesses often face these challenges when implementing the initiative:
              </p>
              <ul>
                <li>High implementation costs</li>
                <li>Complex regulatory requirements</li>
                <li>Staff resistance to change</li>
                <li>Limited technical expertise</li>
                <li>Supply chain coordination issues</li>
              </ul>

              <h3>Solutions</h3>
              <p>
                Address these challenges through:
              </p>
              <ul>
                <li>Phased implementation approach</li>
                <li>Professional consulting support</li>
                <li>Employee engagement programs</li>
                <li>Technology adoption</li>
                <li>Stakeholder collaboration</li>
              </ul>

              <h2>How EGC Can Help</h2>
              <p>
                At EGC, we provide comprehensive support for businesses implementing the Eat Right India Initiative:
              </p>
              <ul>
                <li>Compliance assessment and gap analysis</li>
                <li>Food safety management system implementation</li>
                <li>Staff training and certification programs</li>
                <li>Documentation and process optimization</li>
                <li>Ongoing compliance monitoring and support</li>
                <li>Technology solutions for food safety</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The Eat Right India Initiative represents a significant opportunity for food businesses 
                to align with national priorities while improving their operations and market position. 
                By understanding the requirements and implementing appropriate strategies, businesses can 
                not only ensure compliance but also gain competitive advantages in the market.
              </p>

              <div className="mt-12 p-8 bg-primary-50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-primary-900 mb-4 text-2xl font-semibold">Ready to Implement Eat Right India Compliance?</h3>
                <p className="text-primary-800 mb-6 text-lg">
                  Our experts can help you navigate the requirements and implement effective compliance strategies 
                  for your food business.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-t from-white-700 to-primary-500 text-white px-8 py-4 rounded-lg hover:bg-white-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Today
                </a>
              </div>
              </div> {/* End of relative z-10 div */}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
