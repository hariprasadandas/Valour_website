import React from 'react';

const OFFICES = [
  {
    country: 'United Kingdom',
    city: 'London',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80', 
  },
  {
    country: 'India',
    city: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
];

function OfficesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-blue-500/70 mb-3">
            Our Offices
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            Global Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl bg-white rounded-xl border border-gray-200/60 shadow-lg p-4 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{office.country}</h3>
              <img
                src={office.image}
                alt={office.city}
                className="w-full max-w-md h-56 object-cover rounded-xl shadow-lg mb-4"
                style={{ transition: 'box-shadow 0.3s, transform 0.3s' }}
              />
              <span className="text-xl font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-200">{office.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficesSection;
