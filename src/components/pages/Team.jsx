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
    <main className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-12 space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Our Leadership Team
        </h1>
        <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-blue-200/50 shadow-xl px-6 sm:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-200">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow ring-4 ring-blue-100" />
                <h3 className="text-xl font-bold text-gray-800 text-center mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
