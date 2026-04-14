import React from 'react';
import { motion } from 'framer-motion';
import maleImage from '../../assets/Team/Male-image.jpg';
import avinashImage from '../../assets/Team/Avinash-R.jpg';
import hariImage from '../../assets/Team/Hari-Prasad.jpg';
import janeImage from '../../assets/Team/Jane-smith.jpg';
import kavyaImage from '../../assets/Team/KavyaBM.jpg';
import { cardVariants, hoverLift, imageVariants, sectionVariants, sectionViewport } from '../common/motionPresets';

const Team = () => {
  const femaleMembers = ['Jane Smith', 'Kavya B M'];

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Experienced leader in technology and innovation.',
      image: maleImage,
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Expert in cloud architecture and software development.',
      image: janeImage,
    },
    {
      name: 'Avinash R',
      role: 'Project Lead',
      bio: 'As a Project Lead, I drive the successful delivery of technology solutions by combining strong technical expertise with effective team leadership. I excel at coordinating cross-functional efforts, ensuring project alignment with business goals and delivering high-quality results within timelines.',
      image: avinashImage,
    },
    {
      name: 'Hari Prasad',
      role: 'Software Engineer',
      bio: 'A dedicated Software Engineer with a strong foundation in modern development practices, I specialize in building reliable, scalable and efficient solutions. With a passion for clean code and problem-solving, I consistently strive to deliver high-quality software that drives business value and enhances user experience.',
      image: hariImage,
    },
    {
      name: 'Kavya B M',
      role: 'Associate Engineer',
      bio: 'I am passionate about software development and enjoy building solutions that are practical and efficient. I have a strong interest in understanding how systems work end-to-end and in delivering clear, effective solutions. I have worked on projects focused on solving real-world problems and enhancing user experience.',
      image: kavyaImage,
    },
  ];

  return (
    <motion.main
      className="text-gray-800 min-h-screen bg-gradient-to-br from-blue-50 via-green-50/40 via-white to-orange-50/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="px-6 sm:px-10 md:px-12 lg:px-14 max-w-7xl mx-auto pt-2 sm:pt-4 md:pt-6 pb-12 space-y-12">
        <motion.h1
          variants={cardVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
        >
          Our Leadership Team
        </motion.h1>
        <motion.div
          variants={cardVariants}
          className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-white/70 backdrop-blur-md shadow-[0_24px_70px_rgba(37,99,235,0.12)] px-6 sm:px-8 py-8 sm:py-10"
        >
          <div className="pointer-events-none absolute -top-20 -left-12 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />

          <motion.div variants={sectionVariants} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={hoverLift}
                className={`group relative overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(30,64,175,0.18)] ${
                  index % 2 === 0
                    ? 'border-blue-200/70 bg-gradient-to-r from-white to-blue-50/60'
                    : 'border-indigo-200/70 bg-gradient-to-r from-white to-indigo-50/60'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.12),transparent_35%)]" />

                <div className="relative grid grid-cols-1 md:grid-cols-[240px_1fr] items-center gap-5 sm:gap-7">
                  <motion.div
                    variants={imageVariants}
                    whileHover={{ scale: 1.03 }}
                    className="mx-auto md:mx-0 w-full max-w-[240px] overflow-hidden rounded-2xl bg-white p-2 ring-2 ring-blue-100 shadow-lg"
                  >
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className={`w-full rounded-xl bg-slate-50 ${
                        index === 0
                          ? 'h-56 object-cover object-[center_10%] scale-125'
                          : femaleMembers.includes(member.name)
                            ? 'h-48 object-contain object-center'
                          : 'h-auto'
                      }`}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.div>

                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mt-1 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 max-w-3xl">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Team;
