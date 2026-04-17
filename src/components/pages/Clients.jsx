import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants, hoverLift, sectionVariants, sectionViewport } from '../common/motionPresets';

import aadhyaTechLogo from '../../assets/clients/Aadhya_tech.jpeg';
import gartGroupLogo from '../../assets/clients/Gart_group.jpeg';
import newmarketHolidaysLogo from '../../assets/clients/Newmarket Holidays.png';
import paradiseLogo from '../../assets/clients/Paradise.png';
import relianceLogo from '../../assets/clients/Reliance.jpeg';
import saasphireLogo from '../../assets/clients/Saasphire.png';
import techCubeLogo from '../../assets/clients/Tech_Cube.jpeg';
import thePalmsLogo from '../../assets/clients/The_Palms.jpeg';
import webfxmeLogo from '../../assets/clients/Webfxme.png';

export const CLIENTS_DATA = [
  {
    name: 'The Palms Hotel',
    description: 'Hospitality and guest experience brand.',
    logo: thePalmsLogo,
  },
  {
    name: 'Newmarket Holidays',
    description: 'Travel and hospitality brand.',
    logo: newmarketHolidaysLogo,
  },
  {
    name: 'Reliance Nippon Life Insurance',
    description: 'Insurance and financial services company.',
    logo: relianceLogo,
  },
  {
    name: 'Saasphire',
    description: 'SaaS-focused product and platform company.',
    logo: saasphireLogo,
  },
  {
    name: 'Paradise Biryani Pointe',
    description: 'Food and restaurant chain.',
    logo: paradiseLogo,
  },
  {
    name: 'Tech Cube',
    description: 'Security technology and sales solutions.',
    logo: techCubeLogo,
  },
  {
    name: 'Aadhya Tech',
    description: 'AI and technology solutions provider.',
    logo: aadhyaTechLogo,
  },
  {
    name: 'Gart Group',
    description: 'Innovation-led digital transformation partner.',
    logo: gartGroupLogo,
  },
  {
    name: 'Webfxme',
    description: 'UX/UI and web design company.',
    logo: webfxmeLogo,
  },
];

const Clients = () => {
  const clients = CLIENTS_DATA;

  return (
    <motion.main
      className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
        <motion.h1 variants={cardVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Our Clients
        </motion.h1>
        <motion.div variants={cardVariants} className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={hoverLift}
                className="bg-white rounded-xl p-5 border border-blue-200/60 shadow-lg transition-all duration-200 text-center hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-24 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-50">
                  <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Clients;
