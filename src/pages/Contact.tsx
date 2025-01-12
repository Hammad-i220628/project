import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-poppins font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
          >
            Contact Us
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input 
                    placeholder="Your Name" 
                    className="h-12 text-lg bg-white/80 backdrop-blur-sm border-2 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="h-12 text-lg bg-white/80 backdrop-blur-sm border-2 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Subject" 
                    className="h-12 text-lg bg-white/80 backdrop-blur-sm border-2 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[200px] text-lg bg-white/80 backdrop-blur-sm border-2 focus:border-orange-500 transition-colors resize-none"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex items-center space-x-6 p-6">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-full">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600 text-lg">123 Food Street, Cuisine City, FC 12345</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex items-center space-x-6 p-6">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-full">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600 text-lg">(555) 123-4567</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="flex items-center space-x-6 p-6">
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-full">
                        <Mail className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600 text-lg">info@fooddelight.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Opening Hours</h3>
                <div className="space-y-4 text-lg text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">11:00 AM - 10:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">10:00 AM - 11:00 PM</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;