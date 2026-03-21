import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-3">
            {/* SMALLER CLEAN LOGO */}
            <img
              src="/logo.png"
              alt="Blue Capital Holdings"
              className="h-7 md:h-8 object-contain"
            />
            <div className="text-base md:text-lg font-semibold tracking-tight">
              Blue Capital Holdings LLC
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-blue-700 transition">Home</a>
            <a href="#about" className="hover:text-blue-700 transition">About</a>
            <a href="#criteria" className="hover:text-blue-700 transition">Criteria</a>
            <a href="#sell" className="hover:text-blue-700 transition">Sell Your Business</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Acquiring and Growing Profitable Small Businesses
            </h1>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Blue Capital Holdings LLC is a private investment firm focused on acquiring and
              operating established small businesses with strong fundamentals and long‑term growth
              potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                Start a Confidential Conversation
              </a>

              <a
                href="#criteria"
                className="border border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition"
              >
                View Acquisition Criteria
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-4 gap-6 text-sm text-gray-600">
          <div className="font-medium">Long‑term ownership focused</div>
          <div className="font-medium">Privately held investment firm</div>
          <div className="font-medium">U.S. small business acquisitions</div>
          <div className="font-medium">Confidential process for owners</div>
        </div>
      </section>

      {/* ABOUT / INTRO */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Long‑Term Ownership. Responsible Growth.</h2>

            <p className="text-gray-700 mb-5 leading-relaxed">
              We partner with business owners who are preparing for retirement, succession, or a
              transition. Our goal is to preserve the legacy you built while supporting long‑term
              growth and stability for employees and customers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Rather than buying and flipping companies, we acquire businesses to operate and grow
              them over the long term through operational improvement and responsible ownership.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-5">Core Focus</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Small business acquisitions</li>
              <li>• Operational improvement</li>
              <li>• Long‑term ownership strategy</li>
              <li>• Strategic investments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACQUISITION CRITERIA */}
      <section id="criteria" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Acquisition Criteria</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Revenue</h3>
              <p className="text-gray-700">$500,000 – $5,000,000 annually</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Profitability</h3>
              <p className="text-gray-700">Consistent positive cash flow</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Location</h3>
              <p className="text-gray-700">United States based businesses</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Industries of Interest</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Service businesses</li>
                <li>• Logistics and distribution</li>
                <li>• Commercial services</li>
                <li>• Light manufacturing</li>
                <li>• Real‑estate supported businesses</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Preferred Characteristics</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Established customer base</li>
                <li>• Experienced employees</li>
                <li>• Stable operations</li>
                <li>• Opportunities for operational improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SELL YOUR BUSINESS */}
      <section id="sell" className="bg-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Considering Selling Your Business?</h2>

          <p className="text-blue-100 max-w-3xl mb-10 leading-relaxed">
            We work directly with business owners preparing for retirement, succession, or a
            transition. Our process is confidential, flexible, and focused on protecting the legacy
            of your company.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-blue-100 mb-10">
            <div>• Confidential acquisition process</div>
            <div>• Flexible deal structures</div>
            <div>• Long‑term ownership approach</div>
            <div>• Commitment to employees and customers</div>
          </div>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Submit Your Business Confidentially
          </a>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Submit Your Business</h2>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-6"
        >
          <input name="name" placeholder="Your Name" className="border p-4 rounded-lg" />
          <input name="company" placeholder="Company Name" className="border p-4 rounded-lg" />
          <input name="revenue" placeholder="Annual Revenue" className="border p-4 rounded-lg" />
          <input name="location" placeholder="Location" className="border p-4 rounded-lg" />
          <input name="email" placeholder="Email" className="border p-4 rounded-lg" />
          <input name="phone" placeholder="Phone" className="border p-4 rounded-lg" />
          <textarea
            name="message"
            placeholder="Tell us about the business"
            className="border p-4 rounded-lg"
            rows="5"
          ></textarea>

          <button className="bg-blue-900 text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition">
            Submit Confidentially
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-12 text-center text-sm text-gray-600">
        <div className="font-semibold mb-2">Blue Capital Holdings LLC</div>
        <div>Business Acquisition & Investment Firm</div>
        <div className="mt-3">info@bluecapitalholdings.com | 812‑312‑1910</div>
      </footer>
    </div>
  );
}
