import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';

function ContactSection({ githubUrl, linkedinUrl }) {
  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring innovative ideas to life? Let's discuss your next project!
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toast({ title: "Opening GitHub profile..." })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4 hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toast({ title: "Opening LinkedIn profile..." })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sinomwaqu85@gmail.com"
              onClick={() => toast({ title: "Opening email client..." })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-4 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;