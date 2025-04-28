import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-primary/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="#home" 
              className="text-xl font-semibold text-white hover:text-white/80 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Yedhu Prasad
            </motion.a>
            <p className="text-white/70 text-sm mt-1">Data Analytics & Machine Learning Specialist</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="mailto:yedhuprasadofficial77@gmail.com" 
              className="text-white/70 hover:text-white transition-all duration-300 bg-white/10 p-3 rounded-full"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/yedhu-prasad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 bg-white/10 p-3 rounded-full"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="tel:+447796398336" 
              className="text-white/70 hover:text-white transition-all duration-300 bg-white/10 p-3 rounded-full"
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-6 pt-6 text-center text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Yedhu Prasad. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
