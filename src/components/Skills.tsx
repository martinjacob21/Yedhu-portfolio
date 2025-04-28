import { motion } from "framer-motion";
import { 
  Code, 
  User, 
  Brain, 
  Flag, 
  MessageSquare, 
  Users, 
  Target 
} from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Python (NumPy, pandas, scikit-learn)", percentage: 90 },
    { name: "SQL & Database Management", percentage: 85 },
    { name: "Power BI & Data Visualization", percentage: 80 },
    { name: "Excel (Advanced Formulas, Pivot Tables)", percentage: 95 },
    { name: "Machine Learning Algorithms", percentage: 75 },
    { name: "Linux Administration", percentage: 70 },
  ];

  const softSkills = [
    { 
      name: "Problem-solving", 
      description: "Analyzing complex situations and developing effective solutions",
      icon: <Brain className="h-8 w-8" />
    },
    { 
      name: "Initiative & Ownership", 
      description: "Taking responsibility and driving projects to completion",
      icon: <Flag className="h-8 w-8" />
    },
    { 
      name: "Communication", 
      description: "Effectively conveying complex information to diverse audiences",
      icon: <MessageSquare className="h-8 w-8" />
    },
    { 
      name: "Team Collaboration", 
      description: "Working effectively in cross-functional teams",
      icon: <Users className="h-8 w-8" />
    },
    { 
      name: "Analytical Thinking", 
      description: "Breaking down complex problems and identifying patterns and trends",
      icon: <Target className="h-8 w-8" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            My technical toolbox and soft skills that drive results
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div 
            className="bg-light-gradient rounded-xl shadow-md p-8 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            whileHover={{ boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)" }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <motion.div
                className="text-primary mr-2"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="h-6 w-6" />
              </motion.div>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item p-3 rounded-lg hover:bg-gray-50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <div className="flex justify-between mb-2">
                    <motion.span 
                      className="font-medium"
                      whileHover={{ color: "hsl(var(--primary))" }}
                    >{skill.name}</motion.span>
                    <motion.span 
                      className="font-semibold text-primary"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >{skill.percentage}%</motion.span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      className="skill-progress-bar h-3 bg-gradient rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      whileHover={{ 
                        boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div 
            className="bg-light-gradient rounded-xl shadow-md p-8 border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            whileHover={{ boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)" }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <motion.div
                className="text-primary mr-2"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <User className="h-6 w-6" />
              </motion.div>
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="group" 
                  variants={itemVariants}
                >
                  <motion.div 
                    className="bg-gray-50 border border-transparent rounded-lg p-6 h-full transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div 
                      className="text-primary mb-4 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        {skill.icon}
                      </div>
                    </motion.div>
                    <motion.h4 
                      className="font-medium mb-3 text-center text-lg"
                      whileHover={{ color: "hsl(var(--primary))" }}
                    >
                      {skill.name}
                    </motion.h4>
                    <p className="text-sm text-gray-600 text-center">{skill.description}</p>
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
