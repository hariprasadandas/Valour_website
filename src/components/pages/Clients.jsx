import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: 'TechCorp',
      description: 'Leading technology solutions provider.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=50&fit=crop',
    },
    {
      name: 'Innovate Ltd',
      description: 'Innovation-driven software company.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=50&fit=crop',
    },
    {
      name: 'SecureNet',
      description: 'Cybersecurity experts.',
      logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=50&fit=crop',
    },
    {
      name: 'CloudMasters',
      description: 'Cloud infrastructure specialists.',
      logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=50&fit=crop',
    },
    {
      name: 'DataFlow Inc',
      description: 'Data analytics and processing.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=50&fit=crop',
    },
    {
      name: 'WebSolutions',
      description: 'Web development and design.',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=50&fit=crop',
    },
  ];

  return (
    <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Our Clients
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-200 shadow-lg text-center">
              <img src={client.logo} alt={client.name} className="w-24 h-12 mx-auto mb-4 object-contain" />
              <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
              <p className="text-gray-300 text-sm">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Clients;
