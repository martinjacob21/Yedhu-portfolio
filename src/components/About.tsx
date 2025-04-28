import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const skills = [
    "Data Analysis", 
    "Machine Learning", 
    "Process Optimization", 
    "Data Visualization", 
    "Predictive Modeling", 
    "Problem Solving"
  ];

  return (
    <section id="about" className="py-20 bg-light-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="rounded-lg shadow-xl w-full max-w-lg mx-auto hover-scale"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect width="800" height="600" fill="#f8fafc" rx="8" ry="8" />
                
                {/* Office desk illustration */}
                <rect x="100" y="350" width="600" height="20" fill="#94a3b8" rx="2" ry="2" /> {/* Desk */}
                <rect x="120" y="370" width="20" height="150" fill="#64748b" /> {/* Leg 1 */}
                <rect x="660" y="370" width="20" height="150" fill="#64748b" /> {/* Leg 2 */}
                
                <rect x="150" y="250" width="300" height="100" fill="#e2e8f0" rx="4" ry="4" /> {/* Computer monitor */}
                <rect x="160" y="260" width="280" height="80" fill="#0f172a" rx="2" ry="2" /> {/* Screen */}
                <rect x="290" y="350" width="20" height="20" fill="#94a3b8" /> {/* Monitor stand */}
                
                <rect x="500" y="280" width="150" height="70" fill="#e2e8f0" rx="4" ry="4" /> {/* Tablet/dashboard */}
                <rect x="510" y="290" width="130" height="50" fill="#1e293b" rx="2" ry="2" /> {/* Screen */}
                
                {/* Charts on screens */}
                <circle cx="195" cy="290" r="15" fill="hsl(var(--primary))" opacity="0.7" />
                <circle cx="240" cy="290" r="15" fill="hsl(var(--secondary))" opacity="0.7" />
                <rect x="280" y="280" width="50" height="10" fill="hsl(var(--accent))" opacity="0.7" rx="2" ry="2" />
                <rect x="280" y="300" width="70" height="10" fill="hsl(var(--primary))" opacity="0.7" rx="2" ry="2" />
                <rect x="280" y="320" width="60" height="10" fill="hsl(var(--secondary))" opacity="0.7" rx="2" ry="2" />
                
                <rect x="530" y="300" width="30" height="10" fill="hsl(var(--primary))" opacity="0.7" rx="2" ry="2" />
                <rect x="570" y="300" width="50" height="10" fill="hsl(var(--secondary))" opacity="0.7" rx="2" ry="2" />
                <rect x="530" y="320" width="40" height="10" fill="hsl(var(--accent))" opacity="0.7" rx="2" ry="2" />
                
                <rect x="200" y="370" width="100" height="10" fill="#1e293b" rx="2" ry="2" /> {/* Keyboard */}
                <circle cx="350" cy="375" r="5" fill="#1e293b" /> {/* Mouse */}
                
                <rect x="450" y="370" width="50" height="60" fill="#cbd5e1" rx="2" ry="2" /> {/* Notebook */}
                <line x1="475" y1="380" x2="475" y2="420" stroke="#94a3b8" strokeWidth="1" />
                <line x1="460" y1="390" x2="490" y2="390" stroke="#94a3b8" strokeWidth="1" />
                <line x1="460" y1="400" x2="490" y2="400" stroke="#94a3b8" strokeWidth="1" />
                <line x1="460" y1="410" x2="490" y2="410" stroke="#94a3b8" strokeWidth="1" />
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Proactive & Analytical Professional</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a data analytics and machine learning specialist with experience using Python, SQL, Power BI, and Excel to analyze and model data. I specialize in turning complex data into actionable insights that help both technical and non-technical teams make informed decisions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With a strong foundation in process optimization and predictive modeling, I'm eager to apply my skills to solve real-world problems and drive impactful results.
            </p>
            
            <div className="flex flex-wrap -mx-2">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="px-2 w-1/2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="flex items-center p-2 rounded-md hover:bg-white/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-primary mr-2"
                    >
                      <Check className="h-5 w-5" />
                    </motion.span>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
