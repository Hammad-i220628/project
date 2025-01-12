import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Chef Michael Roberts",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80",
    bio: "With over 15 years of culinary experience, Chef Michael brings his passion for innovative cuisine to every dish."
  },
  {
    name: "Sarah Chen",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=300&q=80",
    bio: "Specializing in French pastries, Sarah creates stunning desserts that are both visually appealing and delicious."
  },
  {
    name: "James Wilson",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&q=80",
    bio: "James brings creativity and precision to every dish, ensuring consistent quality in our kitchen."
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-poppins font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
            >
              Our Story
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Founded in 2010, Food Delight began with a simple mission: to serve exceptional food that brings people together. Our journey started in a small kitchen with big dreams, and today we're proud to be one of the most beloved restaurants in the city.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe in using only the freshest ingredients, supporting local farmers, and creating dishes that combine traditional flavors with modern techniques. Every meal we serve is a reflection of our commitment to culinary excellence.
              </p>
            </motion.div>
          </section>

          <section>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-poppins font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-orange-300 font-medium">{member.role}</p>
                      </div>
                    </motion.div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;