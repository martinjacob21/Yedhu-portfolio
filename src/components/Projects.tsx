import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Predictive Modelling of Therapy Response for Prostate Cancer",
      description: "Developed a machine learning framework using the TCGA-PRAD dataset to predict therapy response in prostate cancer.",
      tags: ["Machine Learning", "Python", "XGBoost", "Random Forest"],
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f8fafc" />
          <g transform="translate(200, 300)">
            <path d="M-100,0 C-100,-150 100,-150 100,0 C100,150 -100,150 -100,0 Z" fill="hsl(var(--primary))" opacity="0.3" />
            <path d="M-75,0 C-75,-100 75,-100 75,0 C75,100 -75,100 -75,0 Z" fill="hsl(var(--primary))" opacity="0.5" />
            <path d="M-50,0 C-50,-75 50,-75 50,0 C50,75 -50,75 -50,0 Z" fill="hsl(var(--primary))" opacity="0.7" />
          </g>
          
          <g transform="translate(600, 300)">
            <rect x="-100" y="-100" width="200" height="200" fill="hsl(var(--secondary))" opacity="0.2" />
            <rect x="-75" y="-75" width="150" height="150" fill="hsl(var(--secondary))" opacity="0.4" />
            <rect x="-50" y="-50" width="100" height="100" fill="hsl(var(--secondary))" opacity="0.6" />
          </g>
          
          <line x1="300" y1="300" x2="500" y2="300" stroke="#475569" strokeWidth="4" strokeDasharray="10,10" />
          <circle cx="300" cy="300" r="8" fill="#1e293b" />
          <circle cx="500" cy="300" r="8" fill="#1e293b" />
          
          <text x="400" y="250" fontSize="24" textAnchor="middle" fill="#1e293b" fontWeight="bold">ML Model</text>
          <text x="200" y="200" fontSize="18" textAnchor="middle" fill="#475569">Patient Data</text>
          <text x="600" y="200" fontSize="18" textAnchor="middle" fill="#475569">Prediction</text>
        </svg>
      )
    },
    {
      title: "Skye App: Bird Species Recognition Using CNN",
      description: "Built a bird species classification system using CNNs to identify species based on image data and created a platform for bird enthusiasts.",
      tags: ["Deep Learning", "CNNs", "Computer Vision", "Python"],
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f8fafc" />
          
          <rect x="150" y="150" width="500" height="300" rx="10" ry="10" fill="#e2e8f0" />
          <rect x="175" y="175" width="450" height="250" rx="5" ry="5" fill="#f1f5f9" />
          
          <path d="M350,250 C380,220 410,220 430,240 C450,260 470,220 500,240" stroke="#475569" fill="none" strokeWidth="2" />
          <circle cx="350" cy="250" r="5" fill="#1e293b" />
          <circle cx="500" cy="240" r="5" fill="#1e293b" />
          
          <path d="M400,300 C400,300 450,280 480,300 C510,320 520,290 550,300" stroke="hsl(var(--primary))" fill="none" strokeWidth="3" />
          
          {/* Simple bird silhouette */}
          <path d="M300,350 C310,340 320,330 330,345 C340,360 350,350 360,345 C380,335 390,345 400,350" stroke="hsl(var(--secondary))" fill="none" strokeWidth="3" />
          <circle cx="330" cy="338" r="3" fill="hsl(var(--secondary))" />
          
          <text x="400" y="400" fontSize="20" textAnchor="middle" fill="#1e293b" fontWeight="bold">Bird Species Recognition</text>
        </svg>
      )
    },
    {
      title: "Power BI Job Simulation Dashboard",
      description: "Enhanced PowerBI skills by creating effective data visualizations and dashboards that demonstrated strong analytical problem-solving abilities.",
      tags: ["Power BI", "Data Visualization", "Dashboard Design", "Data Analysis"],
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f8fafc" />
          
          <rect x="100" y="100" width="600" height="400" rx="8" ry="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          
          {/* Navbar */}
          <rect x="100" y="100" width="600" height="50" rx="8" ry="8" fill="#e2e8f0" />
          <circle cx="130" cy="125" r="10" fill="hsl(var(--primary))" />
          <rect x="150" y="120" width="100" height="10" rx="2" ry="2" fill="#94a3b8" />
          
          {/* Charts */}
          <rect x="120" y="170" width="250" height="150" rx="4" ry="4" fill="white" stroke="#cbd5e1" strokeWidth="1" />
          <text x="160" y="190" fontSize="12" fill="#64748b">CHART 1</text>
          <rect x="150" y="200" width="20" height="100" fill="hsl(var(--primary))" opacity="0.7" />
          <rect x="180" y="220" width="20" height="80" fill="hsl(var(--primary))" opacity="0.8" />
          <rect x="210" y="240" width="20" height="60" fill="hsl(var(--primary))" opacity="0.9" />
          <rect x="240" y="180" width="20" height="120" fill="hsl(var(--primary))" />
          <rect x="270" y="210" width="20" height="90" fill="hsl(var(--primary))" opacity="0.6" />
          
          <rect x="430" y="170" width="250" height="150" rx="4" ry="4" fill="white" stroke="#cbd5e1" strokeWidth="1" />
          <text x="470" y="190" fontSize="12" fill="#64748b">CHART 2</text>
          <circle cx="555" cy="245" r="70" fill="none" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M555,245 L555,175" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M555,245 L620,265" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M555,245 L500,300" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M555,175 A70,70 0 0,1 620,265" fill="hsl(var(--secondary))" opacity="0.8" stroke="hsl(var(--secondary))" />
          <path d="M620,265 A70,70 0 0,1 500,300" fill="hsl(var(--primary))" opacity="0.8" stroke="hsl(var(--primary))" />
          <path d="M500,300 A70,70 0 0,1 555,175" fill="hsl(var(--accent))" opacity="0.8" stroke="hsl(var(--accent))" />
          
          <rect x="120" y="340" width="560" height="140" rx="4" ry="4" fill="white" stroke="#cbd5e1" strokeWidth="1" />
          <text x="160" y="360" fontSize="12" fill="#64748b">DATA TABLE</text>
          <line x1="120" y1="370" x2="680" y2="370" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="120" y1="400" x2="680" y2="400" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="120" y1="430" x2="680" y2="430" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="120" y1="460" x2="680" y2="460" stroke="#f1f5f9" strokeWidth="1" />
          
          <rect x="130" y="380" width="100" height="10" rx="2" ry="2" fill="#94a3b8" />
          <rect x="250" y="380" width="70" height="10" rx="2" ry="2" fill="#94a3b8" />
          <rect x="350" y="380" width="120" height="10" rx="2" ry="2" fill="#94a3b8" />
          <rect x="500" y="380" width="90" height="10" rx="2" ry="2" fill="#94a3b8" />
          
          <rect x="130" y="410" width="100" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="250" y="410" width="70" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="350" y="410" width="120" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="500" y="410" width="90" height="10" rx="2" ry="2" fill="#cbd5e1" />
          
          <rect x="130" y="440" width="100" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="250" y="440" width="70" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="350" y="440" width="120" height="10" rx="2" ry="2" fill="#cbd5e1" />
          <rect x="500" y="440" width="90" height="10" rx="2" ry="2" fill="#cbd5e1" />
        </svg>
      )
    },
    {
      title: "Activity Context Recognition",
      description: "Developed a machine learning model to recognize user actions using smartphone sensor data for personalized user experiences.",
      tags: ["Machine Learning", "SVM", "Random Forest", "Feature Extraction"],
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f8fafc" />
          
          {/* Smartphone outline */}
          <rect x="250" y="100" width="300" height="400" rx="20" ry="20" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <rect x="280" y="150" width="240" height="300" rx="2" ry="2" fill="#e2e8f0" />
          <circle cx="400" cy="120" r="8" fill="#64748b" />
          <rect x="370" y="460" width="60" height="10" rx="5" ry="5" fill="#64748b" />
          
          {/* Activity recognition visualization */}
          <path d="M300,250 Q350,200 400,250 Q450,300 500,250" stroke="hsl(var(--primary))" fill="none" strokeWidth="3" />
          <path d="M300,300 Q350,350 400,300 Q450,250 500,300" stroke="hsl(var(--secondary))" fill="none" strokeWidth="3" />
          <path d="M300,350 Q350,300 400,350 Q450,400 500,350" stroke="hsl(var(--accent))" fill="none" strokeWidth="3" />
          
          <circle cx="350" cy="200" r="8" fill="hsl(var(--primary))" />
          <circle cx="450" cy="300" r="8" fill="hsl(var(--secondary))" />
          <circle cx="350" cy="300" r="8" fill="hsl(var(--secondary))" />
          <circle cx="450" cy="250" r="8" fill="hsl(var(--primary))" />
          <circle cx="350" cy="350" r="8" fill="hsl(var(--accent))" />
          <circle cx="450" cy="400" r="8" fill="hsl(var(--accent))" />
          
          <text x="400" y="180" fontSize="14" textAnchor="middle" fill="#1e293b">Activity Recognition</text>
          <text x="400" y="420" fontSize="12" textAnchor="middle" fill="#475569">Sensor Data Analysis</text>
        </svg>
      )
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
    <section id="projects" className="py-20 bg-light-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic & Professional Projects</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Showcasing my experience in data analytics, machine learning, and more
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md"
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                boxShadow: "0 20px 30px rgba(79, 70, 229, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="h-56 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                {project.icon}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-3 relative inline-block"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  {project.title}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                        whileHover={{ 
                          scale: 1.08, 
                          backgroundColor: "hsl(var(--primary))",
                          color: "white" 
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-all duration-300 relative group"
                  whileHover={{ x: 8 }}
                >
                  <span>View Project</span> 
                  <motion.span
                    className="ml-1 inline-flex items-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
