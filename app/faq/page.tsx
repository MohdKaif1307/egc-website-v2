import Hero from "../components/Hero";
import Accordion from "../components/Accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What services does EGC World provide?",
      answer: "EGC World offers comprehensive business solutions including Business & Management Consulting, Corporate Compliance Solutions, Learning & Development Programs, Marketing & Brand Development, SEO & Digital Marketing, and Regulatory Project Implementation. We serve as a one-stop partner for businesses looking to simplify compliance and achieve sustainable growth."
    },
    {
      question: "Which industries do you specialize in?",
      answer: "We work with businesses across multiple industries including food & beverage, retail, manufacturing, healthcare, technology, and professional services. Our expertise spans regulatory compliance, business optimization, and growth strategies tailored to each industry's unique challenges and requirements."
    },
    {
      question: "How do your consulting services work?",
      answer: "Our consulting process begins with a thorough assessment of your business needs, followed by customized strategy development and implementation support. We work closely with your team to ensure solutions are practical, sustainable, and aligned with your business goals. Our approach includes ongoing monitoring and adjustments as needed."
    },
    {
      question: "What makes your compliance solutions different?",
      answer: "Our compliance solutions combine deep regulatory expertise with practical business implementation strategies. We don't just tell you what to do – we help you implement systems that ensure compliance while improving operational efficiency. Our solutions are designed to be sustainable and scalable as your business grows."
    },
    {
      question: "How do your training programs work?",
      answer: "Our training programs are interactive, practical, and results-focused. We offer both in-person and virtual training sessions, customized to your industry and specific needs. Each program includes pre-assessment, interactive learning sessions, practical exercises, and post-training support to ensure knowledge retention and application."
    },
    {
      question: "What is the typical timeline for seeing results?",
      answer: "Results vary depending on the service and your business needs. Consulting and compliance projects typically show immediate improvements in processes and risk reduction. Training programs show behavioral changes within 2-4 weeks. SEO and marketing services typically show measurable improvements within 3-6 months. We provide regular progress reports throughout all engagements."
    },
    {
      question: "Do you work with small businesses and startups?",
      answer: "Absolutely! We specialize in helping small businesses and startups establish solid foundations for growth. Our services are scalable and we offer flexible engagement models to fit different business sizes and budgets. We understand the unique challenges startups face and provide practical, cost-effective solutions."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and based on the scope and complexity of your needs. We offer both project-based and retainer-based pricing models. During our initial consultation, we'll provide a detailed proposal with clear pricing and deliverables. We believe in value-based pricing that reflects the results you'll achieve."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure your solutions continue to work effectively. This includes regular check-ins, updates to accommodate business changes, and additional training as needed. We're committed to your long-term success, not just project completion."
    },
    {
      question: "How can I get started with EGC World?",
      answer: "Getting started is easy! Simply contact us through our website, phone, or email to schedule a free consultation. During this initial meeting, we'll discuss your business needs, answer your questions, and outline how we can help. We'll then provide a customized proposal tailored to your specific requirements."
    },
    {
      question: "What qualifications do your consultants have?",
      answer: "Our team consists of certified professionals with extensive experience in their respective fields. Our consultants hold relevant certifications in business management, compliance, training, and digital marketing. Many have advanced degrees and 10+ years of industry experience, ensuring you receive expert guidance from qualified professionals."
    },
    {
      question: "Do you offer remote/virtual services?",
      answer: "Yes, we offer both in-person and virtual services to accommodate your preferences and business needs. Our virtual services include online consultations, remote training sessions, digital compliance audits, and virtual project management. We use advanced technology to ensure the same quality and effectiveness as in-person engagements."
    }
  ];

  return (
    <>
      <Hero
        backgroundImage="/images/insights-knowledge-bg.jpg"
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our services and how we can help your business grow"
        gradient="from-blue-900 via-blue-800 to-blue-700"
      />

      <Accordion
        title="Common Questions About Our Services"
        subtitle="Everything you need to know about working with EGC World"
        items={faqItems}
      />

      {/* Additional Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Our Team
            </a>
            <a 
              href="/services" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
