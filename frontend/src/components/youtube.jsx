import React from 'react';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image6 from '../assets/image11.jpg'
import imag10 from '../assets/image3.avif'
const channel = {
  name: 'Your Channel Name',
  description: 'Your channel description goes here. Share what content you create!',
  banner: image6,
  avatar: imag10,
  link: 'https://www.youtube.com/@YourChannelHandle',
};

const YouTubeChannel = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Channel Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-lg overflow-hidden mb-6"
      >
        <img src={channel.banner} alt="Channel Banner" className="w-full h-60 object-cover" />
      </motion.div>

      {/* Channel Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <img
          src={channel.avatar}
          alt="Channel Avatar"
          className="w-24 h-24 rounded-full border-4 border-white -mt-12 shadow-lg mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{channel.name}</h2>
        <p className="text-gray-600 max-w-xl">{channel.description}</p>
        <a
          href={channel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
        >
          <FaYoutube className="mr-2" /> Visit Channel
        </a>
      </motion.div>
    </section>
  );
};

export default YouTubeChannel;
