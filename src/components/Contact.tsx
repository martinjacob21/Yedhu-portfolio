import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>();
  
  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submission:", data);
    
    // In a real application, you would send this data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-light-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Interested in working together? Feel free to reach out to me directly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
            
            <div className="space-y-6 w-full">
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100" 
                whileHover={{ x: 10, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Email */}
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg mr-4 text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href="mailto:yedhuprasadofficial77@gmail.com" className="text-gray-600 hover:text-primary hover:underline transition-colors break-all">
                  yedhuprasadofficial27@gmail.com 
                  </a>
                </div>
              </motion.div>
              {/* Phone number */}
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100" 
                whileHover={{ x: 10, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg mr-4 text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <a href="tel:+447796398336" className="text-gray-600 hover:text-primary hover:underline transition-colors">
                    +44 7796398336
                  </a>
                </div>
              </motion.div>
              {/* LinkedIn */}
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100" 
                whileHover={{ x: 10, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg mr-4 text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/yedhu-prasad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary hover:underline transition-colors break-all">
                    linkedin.com/in/yedhu-prasad
                  </a>
                </div>
              </motion.div>
              {/* Location */}
              <motion.div 
                className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100" 
                whileHover={{ x: 10, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.1)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="bg-primary/10 p-3 rounded-lg mr-4 text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-5 w-5" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Sheffield, United Kingdom</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="mb-4">
                <Label htmlFor="name" className="text-gray-700 mb-2">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="mb-4">
                <Label htmlFor="email" className="text-gray-700 mb-2">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div className="mb-4">
                <Label htmlFor="subject" className="text-gray-700 mb-2">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="text-gray-700 mb-2">Message</Label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    className="flex items-center"
                  >
                    Send Message 
                    <motion.span
                      className="ml-2 inline-flex items-center"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop", times: [0, 0.6, 1] }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.span>
                  </motion.span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
