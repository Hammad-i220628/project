import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// ... rest of the imports and teamMembers array ...

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
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
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founded in 2010, Food Delight began with a simple mission: to serve exceptional food that brings people together. Our journey started in a small kitchen with big dreams, and today we're proud to be one of the most beloved restaurants in the city.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
                  <Card className="overflow-hidden bg-card backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
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
                      <p className="text-muted-foreground text-lg leading-relaxed">{member.bio}</p>
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