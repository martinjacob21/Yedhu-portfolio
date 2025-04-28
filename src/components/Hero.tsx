import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, Github } from "lucide-react";
import Particles from "./Particles";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-light-gradient">
      <Particles />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <motion.span 
                className="text-gradient name-hover inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Yedhu Prasad
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Data Analytics & Machine Learning Specialist
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              Turning complex data into actionable insights that help technical and non-technical teams make informed decisions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#contact" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" /> Contact Me
              </motion.a>
              <motion.a 
                href="#projects" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition duration-300 flex items-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M19 12C19 12 17 7.5 12 7.5C7 7.5 5 12 5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg> View Projects
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white shadow-xl profile-image-hover animate-float"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={profileImage} 
                alt="Yedhu Prasad" 
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 shimmer-effect"></div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a 
            href="mailto:yedhuprasadofficial77@gmail.com" 
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <Mail className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/yedhu-prasad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="tel:+447796398336" 
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <Phone className="h-6 w-6" />
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
