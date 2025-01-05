import React from 'react';
import { BookOpen, Shield, Users, TrendingUp, Github, Twitter, MessagesSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  // Hero Section
  const Hero = () => (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Empowering Education Through Decentralized Finance
            </h1>
            <p className="text-xl text-gray-900 mb-8">
              Access affordable education financing through our secure blockchain-based lending platform.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/borrow')} 
                className="px-8 py-3 bg-[#3272e2] text-white rounded-lg hover:bg-[#22437c] transition-colors duration-300"
              >
                Launch App
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-slideIn">
            <img 
              src="/api/placeholder/600/400" 
              alt="Education Finance" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Features Section
  const Features = () => {
    const features = [
      {
        icon: <Shield className="w-12 h-12 text-[#3272e2]" />,
        title: "Secure & Transparent",
        description: "Built on EDUChain technology ensuring complete transparency and security"
      },
      {
        icon: <TrendingUp className="w-12 h-12 text-[#3272e2]" />,
        title: "Competitive Rates",
        description: "Get better interest rates than traditional education loans"
      },
      {
        icon: <BookOpen className="w-12 h-12 text-[#3272e2]" />,
        title: "Education First",
        description: "Specially designed for students with flexible terms"
      },
      {
        icon: <Users className="w-12 h-12 text-[#3272e2]" />,
        title: "Community Driven",
        description: "Join a community dedicated to making education accessible"
      }
    ];

    return (
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-black mb-16 animate-fadeIn">
            Why Choose EDULend
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-[#22437c] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Footer Component
  const Footer = () => (
    <footer className="bg-[#22437c] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EDULend</h3>
            <p className="text-gray-300">Empowering education through DeFi</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <MessagesSquare size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/borrow" className="hover:text-white transition-colors">Borrow</a></li>
              <li><a href="/lend" className="hover:text-white transition-colors">Lend</a></li>
              <li><a href="/position" className="hover:text-white transition-colors">Position</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 EDULend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;