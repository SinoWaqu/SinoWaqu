import React from 'react';
import { motion } from 'framer-motion';

function SkillsSection({ skills }) {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <skill.icon className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;