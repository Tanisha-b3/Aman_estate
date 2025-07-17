import React from 'react';
import { FaMapMarkerAlt, FaExchangeAlt, FaBullhorn, FaBookOpen } from 'react-icons/fa';

const services = [
  {
    title: 'Rent (Location-wise)',
    description: 'Browse rental properties by location with detailed insights and affordable pricing for families, professionals, and students.',
    icon: <FaMapMarkerAlt size={28} />,
    path: '/services/rent',
  },
  {
    title: 'Resale Properties',
    description: 'Discover our verified resale listings – thoroughly inspected and transparently documented for a secure investment.',
    icon: <FaExchangeAlt size={28} />,
    path: '/services/resale',
  },
  {
    title: 'Real Estate Marketing',
    description: 'We help builders, landlords, and agents market properties through top-tier campaigns that drive visibility and leads.',
    icon: <FaBullhorn size={28} />,
    path: '/services/marketing',
  },
  {
    title: 'Press Book',
    description: 'Explore our media coverage, industry publications, featured news, and project launches in the press book section.',
    icon: <FaBookOpen size={28} />,
    path: '/services/pressbook',
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 font-elegant">
          What We Offer
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our services are designed to help you rent, buy, resell, or market properties with ease and trust. Explore each category below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.path}
              className="group bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#daa520] hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-[#0a0a0a] mb-3 group-hover:text-[#daa520] transition">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2 group-hover:text-[#daa520] transition">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
              <span className="inline-block mt-4 text-sm text-[#daa520] font-medium group-hover:underline">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

