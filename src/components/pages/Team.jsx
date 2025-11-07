import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Experienced leader in technology and innovation.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Expert in cloud architecture and software development.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Passionate about building scalable applications.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Sarah Lee',
      role: 'Security Specialist',
      bio: 'Focused on cybersecurity and threat mitigation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <main className="text-gray-100 min-h-screen bg-gradient-to-b from-gray-900/90 via-gray-950 to-black">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Our Leadership Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/60 transition-all duration-200 shadow-lg">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
              <p className="text-indigo-400 text-center mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
