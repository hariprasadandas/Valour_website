import React from 'react';

import aadhyaTechLogo from '../../assets/clients/Aadhya_tech.jpeg';
import gartGroupLogo from '../../assets/clients/Gart_group.jpeg';
import newmarketHolidaysLogo from '../../assets/clients/Newmarket Holidays.png';
import paradiseLogo from '../../assets/clients/Paradise.png';
import relianceLogo from '../../assets/clients/Reliance.jpeg';
import saasphireLogo from '../../assets/clients/Saasphire.png';
import techCubeLogo from '../../assets/clients/Tech_Cube.jpeg';
import thePalmsLogo from '../../assets/clients/The_Palms.jpeg';
import volGroupLogo from '../../assets/clients/Vol Group.jpeg';
import webfxmeLogo from '../../assets/clients/Webfxme.png';

export const CLIENTS_DATA = [
  {
    name: 'The Palms Hotel',
    description: 'Hospitality and guest experience brand.',
    logo: thePalmsLogo,
    website: 'https://www.palmshotellondon.co.uk/',
  },
  {
    name: 'Newmarket Holidays',
    description: 'Travel and hospitality brand.',
    logo: newmarketHolidaysLogo,
    website: 'https://www.newmarketholidays.co.uk/',
  },
  {
    name: 'Reliance Nippon Life Insurance',
    description: 'Insurance and financial services company.',
    logo: relianceLogo,
    website: 'https://www.indusindnipponlife.com/',
  },
  {
    name: 'Saasphire',
    description: 'SaaS-focused product and platform company.',
    logo: saasphireLogo,
    website: 'https://www.saasphire.co.uk/',
  },
  {
    name: 'Paradise Biryani Pointe',
    description: 'Food and restaurant chain.',
    logo: paradiseLogo,
    website: 'https://paradisebiryanipointe.co.uk/',
  },
  {
    name: 'Tech Cube',
    description: 'Security technology and sales solutions.',
    logo: techCubeLogo,
    website: 'https://www.techcube.co.uk/',
  },
  {
    name: 'Aadhya Tech',
    description: 'AI and technology solutions provider.',
    logo: aadhyaTechLogo,
    website: '',
  },
  {
    name: 'Gart Group',
    description: 'Innovation-led digital transformation partner.',
    logo: gartGroupLogo,
    website: '',
  },
  {
    name: 'Vol Group',
    description: 'Technology-focused business group.',
    logo: volGroupLogo,
    website: 'https://volgroup.co.uk/',
  },
  {
    name: 'Webfxme',
    description: 'UX/UI and web design company.',
    logo: webfxmeLogo,
    website: 'https://webfx.me/',
  },
];

const Clients = () => {
  const clients = CLIENTS_DATA;

  return (
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Our Clients
        </h1>
        <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
              <a
                key={index}
                href={client.website || undefined}
                target={client.website ? '_blank' : undefined}
                rel={client.website ? 'noopener noreferrer' : undefined}
                className={`bg-white rounded-xl p-6 border border-blue-200/60 shadow-lg transition-all duration-200 text-center ${client.website ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : 'cursor-default'}`}
              >
                <div className="w-24 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-50">
                  <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </a>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Clients;
