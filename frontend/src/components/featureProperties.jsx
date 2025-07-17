import React from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';
import image4 from '../assets/image4.avif';
import image5 from '../assets/image5.avif';
import image6 from '../assets/image6.avif';

const FeaturedProperties = () => {
  const filters = ['All Properties', 'Villa', 'Apartments', 'Office'];

  const properties = [
    {
      id: 1,
      image: image1,
      title: 'Luxury Family Home',
      address: '1800-1818 79th St',
      status: 'FOR SALE',
      featured: true,
      beds: 4,
      baths: 1,
      area: 400,
      price: '$395,000',
    },
    {
      id: 2,
      image: image2,
      title: 'Skyper Pool Apartment',
      address: '1020 Bloomingdale Ave',
      status: 'FOR SALE',
      featured: false,
      beds: 4,
      baths: 2,
      area: 450,
      price: '$280,000',
    },
    {
      id: 3,
      image: image3,
      title: 'North Dillard Street',
      address: '4330 Bell Shoals Rd',
      status: 'FOR RENT',
      featured: false,
      beds: 4,
      baths: 2,
      area: 400,
      price: '$250/month',
    },
    {
      id: 4,
      image: image4,
      title: 'Eaton Garth Penthouse',
      address: '7722 18th Ave, Brooklyn',
      status: 'FOR SALE',
      featured: true,
      beds: 4,
      baths: 2,
      area: 450,
      price: '$180,000',
    },
    {
      id: 5,
      image: image5,
      title: 'New Apartment Nice View',
      address: '22 Avenue Q, Brooklyn',
      status: 'FOR RENT',
      featured: true,
      beds: 4,
      baths: 2,
      area: 460,
      price: '$850/month',
    },
    {
      id: 6,
      image: image6,
      title: 'Diamond Manor Apartment',
      address: '7802 20th Ave, Brooklyn',
      status: 'FOR SALE',
      featured: true,
      beds: 4,
      baths: 2,
      area: 500,
      price: '$259,000',
    },
  ];

  return (
    <section className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        Featured Properties
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 mb-8"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </motion.p>

      <div className="flex justify-center space-x-4 mb-12">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="bg-[#daa520] px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute top-4 left-4 flex space-x-2">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  property.status === 'FOR SALE'
                    ? 'bg-green-700 text-white'
                    : 'bg-green-700 text-white'
                }`}
              >
                {property.status}
              </span>
              {property.featured && (
                <span className="px-2 py-1 text-xs font-semibold bg-yellow-500 text-black rounded">
                  FEATURED
                </span>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-left text-white">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="flex items-center text-sm mb-2">
                <FaMapMarkerAlt className="mr-1" /> {property.address}
              </p>
              <div className="flex items-center space-x-4 text-sm mb-2">
                <span className="flex items-center">
                  <FaBed className="mr-1" />
                  {property.beds}
                </span>
                <span className="flex items-center">
                  <FaBath className="mr-1" />
                  {property.baths}
                </span>
                <span className="flex items-center">
                  <FaRulerCombined className="mr-1" />
                  {property.area}
                </span>
              </div>
              <p className="text-right font-bold">{property.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-6 py-3 bg-[#daa520] text-black rounded-full hover:bg-[#b58e20] transition flex items-center mx-auto"
      >
        See All Listing →
      </motion.button>
    </section>
  );
};

export default FeaturedProperties;
