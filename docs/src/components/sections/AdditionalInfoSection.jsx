import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Award as AwardIcon } from 'lucide-react';

function AdditionalInfoSection({ additionalInfo }) {
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
            Additional Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <AwardIcon className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            {additionalInfo.certifications.map(cert => (
              <div key={cert.name}>
                <p className="font-semibold">{cert.name}</p>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.interests.map(interest => (
                <span key={interest} className="bg-purple-500/20 text-purple-300 text-sm font-medium px-3 py-1 rounded-full">{interest}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <Star className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold">Extra-curricular</h3>
            </div>
            {additionalInfo.extraCurricular.map(extra => (
              <div key={extra.role}>
                <p className="font-semibold">{extra.role}</p>
                <p className="text-sm text-gray-400">{extra.period}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalInfoSection;