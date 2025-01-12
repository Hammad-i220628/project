import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedDish from "@/components/FeaturedDish";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const featuredDishes = [
  {
    name: "Classic Burger",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    description: "Juicy beef patty with fresh vegetables and our special sauce"
  },
  {
    name: "Margherita Pizza",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80",
    description: "Fresh mozzarella, tomatoes, and basil on our homemade crust"
  },
  {
    name: "Caesar Salad",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80",
    description: "Crisp romaine lettuce, parmesan cheese, and homemade croutons"
  },
  {
    name: "Pasta Carbonara",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80",
    description: "Creamy sauce with pancetta and fresh parmesan"
  }
];

// Enhanced bubble effect with more dynamic properties
const Bubble = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
      scale: [0.8, 1.2, 0.9],
      opacity: [0, 0.7, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    className={`absolute rounded-full mix-blend-multiply filter blur-xl ${className}`}
  />
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Update bubble colors for dark mode compatibility */}
      <Bubble className="bg-orange-500/10 dark:bg-orange-500/5 w-96 h-96 top-20 -left-20" delay={0} />
      <Bubble className="bg-purple-500/10 dark:bg-purple-500/5 w-[32rem] h-[32rem] top-40 -right-20" delay={1} />
      <Bubble className="bg-pink-500/10 dark:bg-pink-500/5 w-[28rem] h-[28rem] bottom-20 left-40" delay={2} />
      <Bubble className="bg-blue-500/10 dark:bg-blue-500/5 w-80 h-80 bottom-40 right-20" delay={3} />
      
      <Navbar />
      
      <section className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-purple-600">
                Delicious Food,
                <br />
                Delivered to You
              </h1>
              <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                Experience the best food delivery service in town. Fresh, fast, and always delicious.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="font-semibold text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Order Now
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-2xl filter blur-2xl transform rotate-6"></div>
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.4 }}
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80"
                  alt="Delicious Food"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
          >
            Featured Dishes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <FeaturedDish {...dish} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;