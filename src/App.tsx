import React from 'react';
import { Phone, Rocket, Notebook as Robot, ChevronRight, Mail, MapPin, TrendingUp, Clock, DollarSign, MessageCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, BarChart, Bar, ResponsiveContainer } from 'recharts';

const performanceData = [
  { year: '2019', traditional: 100, aiEnhanced: 100 },
  { year: '2020', traditional: 105, aiEnhanced: 130 },
  { year: '2021', traditional: 110, aiEnhanced: 180 },
  { year: '2022', traditional: 115, aiEnhanced: 250 },
  { year: '2023', traditional: 120, aiEnhanced: 340 },
];

const efficiencyData = [
  { month: 'Jan', manual: 41, automated: 90 },
  { month: 'Feb', manual: 42, automated: 91 },
  { month: 'Mar', manual: 45, automated: 92 },
  { month: 'Apr', manual: 41, automated: 93 },
  { month: 'May', manual: 44, automated: 95 },
  { month: 'Jun', manual: 43, automated: 94 },
];

const costSavingsData = [
  { category: 'Labor', traditional: 100000, withAI: 40000 },
  { category: 'Operations', traditional: 80000, withAI: 45000 },
  { category: 'Maintenance', traditional: 60000, withAI: 30000 },
  { category: 'Training', traditional: 40000, withAI: 25000 },
];

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
              <span className="block">Transform Your Business</span>
              <span className="block text-accent">With AI Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our AI tools will automate your systems and let you focus on what is most important: making money
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

      {/* Services Section */}
      <div id="services" className="py-24 bg-white">
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
              <Robot className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-xl font-medium text-black">Custom made AI products</h3>
              <p className="mt-2 text-center text-gray-500">We build premium AI tools, taylored to your specific needs. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div id="impact" className="py-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-black sm:text-4xl">The AI Advantage</h2>
            <p className="mt-4 text-xl text-gray-500">Real data showing the transformative power of AI in business</p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* Business Growth Chart */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Business Growth Comparison</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" stroke="#94a3b8" name="Traditional Business" />
                    <Line type="monotone" dataKey="aiEnhanced" stroke="#0066FF" name="AI-Enhanced Business" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-gray-600">Businesses leveraging AI solutions show significantly higher growth rates compared to traditional approaches</p>
            </div>

            {/* Efficiency Metrics */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Operational Efficiency</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={efficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="manual" stackId="1" stroke="#94a3b8" fill="#94a3b8" name="Manual Processes" />
                    <Area type="monotone" dataKey="automated" stackId="1" stroke="#0066FF" fill="#0066FF" name="AI-Automated Processes" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-gray-600">AI automation consistently delivers higher operational efficiency across all business processes</p>
            </div>

            {/* Cost Savings */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Annual Cost Comparison</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costSavingsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="traditional" fill="#94a3b8" name="Traditional Costs" />
                    <Bar dataKey="withAI" fill="#0066FF" name="Costs with AI" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-gray-600">Significant cost reductions across all business operations with AI implementation</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
              <p className="mt-2 text-gray-500">kaden@auto-mate.business</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <Phone className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-medium text-black">Phone</h3>
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

      {/* Floating Chat Button */}
      <a
        href="https://chatgpt.com/g/g-67baea3faf24819190c4412d5616215c-web-mate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors duration-200 flex items-center gap-2 group"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-in-out">
          Chat with AI
        </span>
      </a>
    </div>
  );
}

export default App;