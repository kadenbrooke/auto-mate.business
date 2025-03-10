import { Phone, Rocket, Notebook, ChevronRight, Mail, MapPin, TrendingUp, Clock, DollarSign, Users, Briefcase } from 'lucide-react';

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-black tracking-tighter">auto mate</div>
      <div className="text-sm tracking-[0.3em] uppercase">AI solutions</div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9f6] to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-accent">Services</a>
              <a href="#impact" className="text-gray-600 hover:text-accent">Impact</a>
              <a href="#about" className="text-gray-600 hover:text-accent">About</a>
              <a href="#contact" className="text-gray-600 hover:text-accent">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-black text-black sm:text-5xl md:text-6xl">
              <span className="block">Enhance Your Business</span>
              <span className="block text-accent">With AI Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We believe in empowering people to escape desk-bound lives by nurturing creativity, growth, and connection.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 md:py-4 md:text-lg md:px-10">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section (formerly AI Advantage) */}
      <div id="impact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-black sm:text-4xl">The AI Advantage</h2>
            <p className="mt-4 text-xl text-gray-500">Real data showing the transformative power of AI in business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advantage Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
              <Users className="h-16 w-16 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Replace 18+ Employees</h3>
              <p className="text-gray-600 text-lg">
                AI tools can replace 18+ human employees in certain industries, dramatically reducing operational costs.
              </p>
            </div>

            {/* Advantage Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
              <Briefcase className="h-16 w-16 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-black mb-4">Dual Benefits</h3>
              <p className="text-gray-600 text-lg">
                Businesses using AI report a reduction in costs along with an increase in revenue.
              </p>
            </div>
          </div>

          {/* McKinsey Chart */}
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Automation Potential Across Industries</h3>
            <div className="flex justify-center">
              <img 
                src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*0BkkEwIz_oU_WELcsha01g.png" 
                alt="McKinsey chart showing 30% of hours worked today could be automated by 2030" 
                className="max-w-full h-auto rounded-lg shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/1200x800/e2e8f0/64748b?text=With+Generative+AI,+30%25+of+Hours+Worked+Today+Could+Be+Automated+by+2030";
                }}
              />
            </div>
            <p className="mt-6 text-gray-600 text-center text-lg">
              According to McKinsey & Company research, with generative AI, 30% of hours worked today could be automated by 2030, with significant variations across different sectors and job roles.
            </p>
            <p className="mt-2 text-gray-500 text-center text-sm">
              Source: McKinsey & Company
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-2xl font-bold text-black mt-4">240%</h4>
              <p className="text-gray-600">Average Growth Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-2xl font-bold text-black mt-4">60%</h4>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <DollarSign className="h-12 w-12 text-accent mx-auto" />
              <h4 className="text-2xl font-bold text-black mt-4">45%</h4>
              <p className="text-gray-600">Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-black sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-xl text-gray-500">Comprehensive AI solutions tailored to your needs</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Phone className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-xl font-medium text-black">AI Strategy Consulting</h3>
              <p className="mt-2 text-center text-gray-500">Develop a comprehensive AI roadmap for your business. Your first consultation is on us.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Rocket className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-xl font-medium text-black">Pre-developed AI tools</h3>
              <p className="mt-2 text-center text-gray-500">Apply these general AI tools to automate your day to day work and systemns.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Notebook className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-xl font-medium text-black">Custom made AI products</h3>
              <p className="mt-2 text-center text-gray-500">We build premium AI tools, taylored to your specific needs. </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-black text-black sm:text-4xl">About Us</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're a team of AI experts dedicated to helping businesses leverage artificial intelligence effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-black">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-500">Get in touch to discuss how we can help transform your business</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Mail className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-medium text-black">Email</h3>
              <p className="mt-2 text-gray-500">kadenbrooke@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Phone className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-medium text-black">Call/Text</h3>
              <p className="mt-2 text-gray-500">(801) 458-3118</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <MapPin className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-medium text-black">Location</h3>
              <p className="mt-2 text-gray-500">Spanish Fork, UT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <p className="mt-4 text-center text-gray-400">© 2024 AutoMate AI Solutions. All rights reserved.</p>
          <div className="text-center text-gray-400 mt-2">since 2025</div>
        </div>
      </footer>
    </div>
  );
}

export default App;