import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// ... rest of the imports and menuCategories array ...

const Menu = () => {
  const { toast } = useToast();

  const handleAddToCart = (itemName: string) => {
    toast({
      title: "Added to cart",
      description: `${itemName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-poppins font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
          >
            Our Menu
          </motion.h1>
          
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <motion.section 
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-poppins font-bold mb-8 text-orange-500 relative">
                  {category.category}
                  <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden bg-card hover:bg-card/80 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="flex justify-between items-center text-xl">
                            <span className="text-foreground">{item.name}</span>
                            <span className="text-orange-500 font-bold">{item.price}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-6">{item.description}</p>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                              onClick={() => handleAddToCart(item.name)}
                            >
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;