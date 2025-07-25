import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';

function HeroSection({ imageUrl, handleDownloadCV, handleContactClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-2xl">
            <img alt="Sinovuyo Waqu professional headshot" className="w-full h-full rounded-full object-cover bg-gradient-to-r from-purple-400 to-blue-400" src={imageUrl} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
        >
          SINOVUYO WAQU
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Aspiring IT Professional
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Mail className="w-4 h-4" />
            <span>sinomwaqu85@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <Phone className="w-4 h-4" />
            <span>066 254 8001</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
            <MapPin className="w-4 h-4" />
            <span>Midrand, 1687</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4"
        >
          <Button 
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button 
            onClick={handleContactClick}
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;