import React from 'react';
import { ChevronDownIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { 
  ShoppingCartIcon, 
  GlobeAltIcon, 
  PencilAltIcon, 
  SearchCircleIcon,
  CheckIcon
} from '@heroicons/react/solid';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <LocationMarkerIcon className="w-8 h-8 text-white" />
            </div>
            <span className="text-white text-xl font-bold">Local WebSight</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-300 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
            <a href="#blogs" className="text-white hover:text-purple-300 transition-colors">Blogs</a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <span>Services</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="#shopify" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Shopify Product Listing</a>
                  <a href="#optimization" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Web Optimization</a>
                  <a href="#blog-writing" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Blog Writing</a>
                  <a href="#gmb" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">GMB Set-up & Revamp</a>
                </div>
              </div>
            </div>

            {/* Works Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-purple-300 transition-colors">
                <span>Works</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <a href="#shopify-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Shopify Product Listing</a>
                  <a href="#web-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Web Optimization</a>
                  <a href="#blog-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Blog Writing</a>
                  <a href="#gmb-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">GMB Set-up & Revamp</a>
                  <a href="#video-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">Video Editing</a>
                </div>
              </div>
            </div>

            <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://www.facebook.com/share/1C2sVQfWG9/" 
               className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/"
               className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.137 0-3.864-1.729-3.864-3.866s1.727-3.866 3.864-3.866c2.136 0 3.864 1.729 3.864 3.866s-1.728 3.866-3.864 3.866zm7.518 0c-2.137 0-3.864-1.729-3.864-3.866s1.727-3.866 3.864-3.866c2.137 0 3.864 1.729 3.864 3.866s-1.727 3.866-3.864 3.866z"/>
              </svg>
            </a>
            <a href="https://localwebsight.great-site.net/www.linkedin.com/in/greyworkx"
               className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-20 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              "Struggling to get noticed online? Let Local WebSight help you show up, stand out, and get found—without lifting a finger."
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Effortless growth, so you can focus on what you do best.
            </p>
            <button className="bg-transparent border-2 border-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              Start Ranking Today
            </button>
          </div>
        </div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHxwdXJwbGV8MTc1Mjk1MjIzNHww&ixlib=rb-4.1.0&q=85" 
            alt="Digital Marketing Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive digital marketing solutions to help your business grow online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Shopify SEO */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <ShoppingCartIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Shopify SEO</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Accurate and SEO-friendly product uploads to help your store convert better and rank higher.
              </p>
              <ul className="space-y-3">
                {[
                  "Uploading and editing product listings",
                  "Writing optimized product titles and descriptions", 
                  "Adding high-quality images and alt text",
                  "Organizing products into appropriate collections",
                  "Updating prices, inventory, and product variants",
                  "Ensuring consistent formatting and brand voice",
                  "Performing competitor product listing analysis",
                  "Tagging products for easier navigation and filtering",
                  "Basic product SEO (meta titles/descriptions)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Website Optimization */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <GlobeAltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Website Optimization</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Improving site performance and visibility to ensure your visitors have a seamless experience.
              </p>
              <ul className="space-y-3">
                {[
                  "Optimizing on-page SEO (titles, meta tags, keywords)",
                  "Improving page speed (compressing images, reducing load times)",
                  "Reviewing and fixing broken links",
                  "Ensuring mobile responsiveness",
                  "Adding/update alt texts and headings",
                  "Basic UI/UX adjustments",
                  "Conducting website audits using free tools",
                  "Submitting pages to Google Search Console",
                  "Monitoring key metrics (bounce rate, clicks, impressions)"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Writing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <PencilAltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Blog Writing</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Creating engaging and SEO-optimized content that attracts traffic and builds trust.
              </p>
              <ul className="space-y-3">
                {[
                  "Researching relevant and trending blog topics",
                  "Writing original, well-structured blog posts",
                  "Optimizing blog content for target keywords",
                  "Crafting compelling titles and meta descriptions",
                  "Using headers (H1, H2, H3) for structure and readability",
                  "Inserting internal and external links",
                  "Sourcing royalty-free images and adding alt text",
                  "Formatting posts for readability and mobile-friendliness",
                  "Uploading content to WordPress or other CMS platforms"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* GMB Set-up & Revamp */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <SearchCircleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">GMB Set-up & Revamp</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Helping local businesses get discovered more easily on Google.
              </p>
              <ul className="space-y-3">
                {[
                  "Setting up or claiming Google My Business profiles",
                  "Optimizing business info (name, address, hours, etc.)",
                  "Writing keyword-rich business descriptions",
                  "Uploading high-quality logo, cover photo, and service images",
                  "Adding service areas, categories, and business attributes",
                  "Posting weekly GMB updates (offers, news, blogs)",
                  "Managing and responding to customer reviews",
                  "Ensuring NAP consistency across directories",
                  "Monitoring profile insights and performance"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John",
                company: "Upside Venture LLC DBA FAnsites",
                quote: "Sounds good! I watched one of the shortened videos, looks good to me. Great work so far!",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Nina",
                company: "Model",
                quote: "You have no idea seriously you're going to be helping me a lot, so I really appreciate it!",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Ronit",
                company: "My Backyard Zone",
                quote: "I like your work on the key features and the way you explain every feature as requested!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Eric",
                company: "Medcore Direct",
                quote: "Awesome!!! Great job Gry. We do and are excited to have you on a team.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your business to the next level? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:localwebsightbygrey@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                localwebsightbygrey@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+639218926175" className="text-purple-300 hover:text-purple-200 transition-colors">
                +63921-892-6175
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocationMarkerIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-purple-300">
                Tuy, Batangas, Philippines, 4214
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <LocationMarkerIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-lg font-bold">Local WebSight</span>
            </div>
            
            <p className="text-gray-400 text-center md:text-left">
              All Rights Reserved ©2022 | LocalWebSight
            </p>

            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <a href="https://www.facebook.com/share/1C2sVQfWG9/" 
                 className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/"
                 className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-2.137 0-3.864-1.729-3.864-3.866s1.727-3.866 3.864-3.866c2.136 0 3.864 1.729 3.864 3.866s-1.728 3.866-3.864 3.866zm7.518 0c-2.137 0-3.864-1.729-3.864-3.866s1.727-3.866 3.864-3.866c2.137 0 3.864 1.729 3.864 3.866s-1.727 3.866-3.864 3.866z"/>
                </svg>
              </a>
              <a href="https://localwebsight.great-site.net/www.linkedin.com/in/greyworkx"
                 className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}