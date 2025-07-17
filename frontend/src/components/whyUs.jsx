import React from 'react';
import { FaHome, FaShieldAlt, FaFileContract } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyUsSection = () => {
  const features = [
    {
      icon: <FaFileContract size={40} />,
      title: 'Wide Range of Properties',
      description: 'We offer expert legal help for all related property items in Dubai.',
    },
    {
      icon: <FaHome size={40} />,
      title: 'Buy or Rent Homes',
      description: 'We sell your home at the best market price and very quickly as well.',
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Trusted by Thousands',
      description: 'We offer you free consultancy to get a loan for your new home.',
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Why You Should Work With Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 mb-12"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="text-[#996515]">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-[#996515] rounded-lg py-8 px-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-white"
      >
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-semibold mb-2">Sign in to streamline your search</h4>
          <p className="text-gray-200">Save properties, create alerts and keep track of the enquiries you send to agents.</p>
        </div>
        <button className="bg-[#daa520] text-black px-6 py-3 rounded-md hover:bg-[#b58e20] transition flex items-center">
          Sign in or create an account →
        </button>
      </motion.div>
    </section>
  );
};

export default WhyUsSection;
