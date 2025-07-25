import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function SummarySection() {
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
            Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 text-purple-400 mr-4" />
            <h3 className="text-2xl font-bold">Professional Summary</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an aspiring IT professional with a strong foundation in information technology, project coordination, and sound engineering. I gained these skills from practical experience in various industries. I am currently studying a Bachelor of Science in Information Technology and am committed to expanding my technical knowledge and applying it in real-world scenarios. I am always keen to learn from others and be part of a team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SummarySection;