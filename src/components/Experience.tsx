import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Workflow Information Analyst",
      company: "Next Distribution Ltd | Doncaster, UK",
      period: "Oct 2024 - Present",
      duties: [
        "Analyse workflow data using Excel and Google Sheets to support decision-making and optimize processes",
        "Work closely with senior managers to understand requirements and provide data-driven insights for strategic planning and optimization",
        "Refine and improve daily data processes to ensure maximum accuracy and efficiency"
      ]
    },
    {
      title: "Returns Processing Operative",
      company: "Frasers Group | Mansfield, UK",
      period: "May 2024 - Oct 2024",
      duties: [
        "Managed the accurate processing of returned merchandise, ensuring inventory accuracy and customer satisfaction",
        "Developed attention to detail in managing product data and resolving issues efficiently"
      ]
    },
    {
      title: "Warehouse Operative (Part-time)",
      company: "Company Shop Group | Barnsley, UK",
      period: "Feb 2023 - May 2024",
      duties: [
        "Collaborated with the team to manage warehouse operations, including shipment receiving, order picking, and inventory management"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Luminar Technolab Pvt Ltd | Kochi, India",
      period: "May 2022 - Nov 2022",
      duties: [
        "Utilized Python (NumPy, pandas, scikit-learn) to clean and preprocess data, alongside implementing machine learning algorithms for predictive modeling",
        "Gained experience in machine learning techniques and NoSQL databases, and used Tableau to create impactful visualizations for communicating insights"
      ]
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            My professional journey and experience
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="timeline-dot bg-primary"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5, times: [0, 0.5, 1] }}
              />
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
                whileHover={{ 
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                  borderColor: "rgba(79, 70, 229, 0.3)",
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <motion.h3 
                    className="text-xl font-semibold relative inline-block"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {exp.title}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h3>
                  <div className="text-sm text-gray-500 mt-1 md:mt-0 font-medium">{exp.period}</div>
                </div>
                <div className="text-primary font-medium mb-3">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.duties.map((duty, dutyIndex) => (
                    <motion.li 
                      key={dutyIndex} 
                      className="text-gray-600 pl-5 relative"
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <span className="absolute left-0 top-2 w-2 h-2 bg-primary/60 rounded-full"></span>
                      {duty}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
