import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "MSc Big Data Analytics (Merit)",
      school: "Sheffield Hallam University | UK",
      period: "Jan 2023 - Feb 2024",
      courses: "Advanced Data Management Project, Data Analytics: Tools and Techniques, Programming Concepts and Practice, Study Skills and Project Management"
    },
    {
      degree: "Bachelor of Computer Science (Merit)",
      school: "Mahatma Gandhi University | Kerala, India",
      period: "July 2019 - June 2022",
      courses: "Python, Big Data: Analytics, Database Management Systems, Statistics, Linux Administration"
    }
  ];

  const certifications = [
    {
      title: "PwC Switzerland Power BI Job Simulation",
      issuer: "on Forage",
      date: "June 2024",
      description: "Enhanced PowerBI skills, created effective data visualizations and dashboards, demonstrated strong communication, and leveraged analytical problem-solving skills."
    },
    {
      title: "JPMorgan Chase & Co. - Excel Skills Job Simulation",
      issuer: "on Forage",
      date: "April 2024",
      description: "Developed expertise in Excel for data analysis, visualization, and automation using VBA."
    },
    {
      title: "LinkedIn Learning - Power BI Essential Training",
      issuer: "LinkedIn Learning",
      date: "April 2024",
      description: "Developed expertise in Business Intelligence (BI), data analysis, and Microsoft Power BI."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="py-20 bg-light-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <motion.div
                className="text-primary mr-2"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="h-6 w-6" />
              </motion.div>
              <motion.span
                className="relative"
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                Education
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-md"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)",
                    borderColor: "rgba(79, 70, 229, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.h4 
                    className="font-semibold text-lg relative inline-block"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {edu.degree}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h4>
                  <div className="text-primary mb-2 font-medium mt-2">{edu.school}</div>
                  <div className="text-sm text-gray-500 mb-3 italic">{edu.period}</div>
                  <p className="text-gray-700 mb-3 text-sm">
                    <strong className="text-gray-800">Key Modules:</strong> {edu.courses}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <motion.div
                className="text-primary mr-2"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="h-6 w-6" />
              </motion.div>
              <motion.span
                className="relative"
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                Certifications
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-100 shadow-md"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)",
                    borderColor: "rgba(79, 70, 229, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.h4 
                    className="font-semibold text-lg relative inline-block"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {cert.title}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h4>
                  <div className="text-primary mb-2 font-medium mt-2">{cert.issuer}</div>
                  <div className="text-sm text-gray-500 mb-3 italic">{cert.date}</div>
                  <p className="text-gray-700 text-sm">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
